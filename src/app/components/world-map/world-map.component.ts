import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IStat } from '../../services/data.service';
import { getCountryId } from './world-map.countries';

interface IChartData {
  id: string,
  value: string,
  tooltext: string,
}

@Component({
  selector: "map",
  templateUrl: "./world-map.component.html"
})

export class WorldMapComponent implements OnInit, OnChanges {
  @Input() public statsData: IStat[];
  public dataSource: any;
  constructor(private cdr: ChangeDetectorRef) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['statsData'].currentValue.length > 0) {
      this.getChartData();
    }
  }
  public ngOnInit(): void {
    
  }

   private getChartData(): any {
    let data: IChartData[] = [];
    let test: number[] = []
    this.statsData.map(stat => {
      test.push(stat.cases.total)
      data.push(
        {
          id: getCountryId(stat.country),
          value: stat.cases.total.toString(),
          tooltext: this.getTooltip(stat),
        }
      )
    })
    const dataSource = {
      width: '100%',
      height: '550px',
      chart: {
        type: "worldwithcountries",
        theme: "fusion",
        formatNumberScale: "0",
        hovercolor: "#edf6f9",
      },
      colorrange: {
        minvalue: '0',
        gradient: '1',
        color: [
          {
            minvalue: '0',
            maxvalue: '10000',
            color: '#ffbaba',
          },
          {
            minvalue: '10001',
            maxvalue: '100000',
            color: '#ff7b7b',
          },
          {
            minvalue: '100001',
            maxvalue: '1000000',
            color: '#ff5252',
          },
          {
            minvalue: '1000001',
            maxvalue: '10000000',
            color: '#ff0000',
          },
          {
            minvalue: '10000001',
            maxvalue: '50000000',
            color: '#b43333',
          },
          {
            minvalue: '0000001',
            maxvalue: '120000000',
            color: '#A70000',
          }
        ],
      },
      data,
    };
    this.dataSource = dataSource;
  }



private getTooltip(stat: IStat): string {
  return(
    stat.country+
    '{br}Total: ' +
    stat.cases.total +
    '{br}Deaths: ' +
    stat.deaths.total +
    '{br}Recovered: ' +
    stat.cases.recovered
  );
}

}