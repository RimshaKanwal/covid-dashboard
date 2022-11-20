import { Component, OnInit } from '@angular/core';
import { DataService, IParams, IStat } from '../../services/data.service';
import { ICardData } from '../card/card.component';
import { IChart } from '../chart/chart.component';
import { forkJoin } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public stats: IStat[] = [];
  public isLoading = true;
  public continentsData: IStat[] = [];
  public globalStats: IStat;
  public previousCountry = 'All';
  public selectedCountry = 'All';
  public previousDate= '';
  public selectedDate = '';
  public countries: string [];
  public cardData: {
    title: string,
    value: string,
  }[];
  public casesChartData: {
    title: string,
    type: string,
    data: IChart
  }[];
  constructor(
    private service: DataService,
  ) {}

  public ngOnInit(): void {
    this.fetchData();
    this.service.getCountries().subscribe(countries => {
      this.countries = countries;
      console.log(countries);
    })
  }

  public fetchData(country?: string, date? :string) {
    let params: IParams = {
      country: country ? country : 'All',
    }
    if (date) params.day = date
    forkJoin([
      country ? this.service.getStatistics(country): this.service.getStatistics(),
      this.service.getHistory(params),
     ])
    .subscribe(([stats, history]) => {
      this.stats = stats;
      this.previousDate = stats[0].day;
      this.previousCountry =history[0].country;
      this.setDataForCards()
      this.setDataForHistory(history);
      this.isLoading = false;
      this.selectedCountry = '';
      this.selectedDate = '';
    }); 
  }

  public setDate(date: any) {
    if (parseInt(date.day) < 10) date.day = `0${date.day}`
    if (parseInt(date.month) < 10) date.month = `0${date.month}`
    this.selectedDate = `${date.year}-${date.month}-${date.day}`
  }

  public setDataForCards() {
    this.stats.map( stat => {
      if(stat.country == 'All') this.cardData = this.transformDataForCards(stat);
    })
  }

  public transformDataForCards(stat: IStat): ICardData[] {
    let cardData: ICardData[] =[]
    if (stat.cases?.total) cardData.push({title: 'Total', value: stat.cases.total.toString()});
    if (stat.cases?.recovered) cardData.push({title: 'Recovered', value: stat.cases.recovered.toString()});
    if (stat.cases?.active) cardData.push({title: 'Active', value: stat.cases.active.toString()});
    if (stat.cases?.critical) cardData.push({title: 'Critical', value: stat.cases.critical.toString()});
    if (stat.cases?.new) cardData.push({title: 'New', value: stat.cases.new});
    if (stat.deaths?.total) cardData.push({title: 'Deaths', value: stat.deaths.total.toString()});
    return cardData;
  }

  public setDataForHistory(history: IStat[]) {
    let newCases: any = [];
    let categories: any = [];
    let active: any = [];
    let critical: any = [];
    let deaths: any = [];
    let newDeaths: any = []
    let total: any = []
    let recovered: any = []
    history.map((stat: IStat) => {

      const date = stat.day.split('-');
      const day = `${date[2]}/${date[1]}`
      newCases.push({
        label: day,
        value: stat.cases.new,
      });
      categories.push({
        label: day,
      });
      active.push({
        value: stat.cases.active,
        label: day,
      });
      critical.push({
        value: stat.cases.critical,
      });
      recovered.push({
        value: stat.cases.recovered,
      });
      deaths.push({
        value: stat.deaths.total,
      });
      newDeaths.push({
        value: stat.deaths.new,
      })
      total.push({
        value: stat.cases.total,
      });
    })
    this.casesChartData = [
      {
        title: "Daily New Cases",
        type: 'Column2d',
        data: newCases
      },
      {
        title: "Daily Active Cases",
        type: 'Column2d',
        data: active
      },
      {
        title: 'Daily Deaths vs Critical',
        type: 'msline',
        data: {
          categories: [{
            category: categories,
          }],
          dataset: [
            {
              seriesname: "Deaths",
              data: newDeaths,
            },
            {
              seriesname: "Critical",
              data: critical,
            }
          ]
        }
      },
      {
        title: 'Total vs Recovered',
        type: 'msline',
        data: {
          categories: [{
            category: categories,
          }],
          dataset: [
            {
              seriesname: "Total",
              data: total,
            },
            {
              seriesname: "Recovered",
              data: recovered,
            }
          ]
        }
      },
    ];
  }

  public get getCountry(): string {
    return this.previousCountry;
  }

   public setCountry(country: string): void {
    this.selectedCountry = country;
    console.log(this.selectedCountry)
  }

  public search() {
    if ((this.selectedCountry  && this.selectedCountry !== this.previousCountry) ||
        (this.selectedDate && this.selectedDate !== this.previousDate)) {
        this.isLoading = true;
        this.fetchData(this.selectedCountry, this.selectedDate);
    }
  }
}
