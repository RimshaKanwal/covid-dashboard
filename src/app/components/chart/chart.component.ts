import { Component, Input, OnInit } from '@angular/core';

export interface IChart {
  data?: any,
  categories?: any,
  dataset?: any,
}

interface IDataSource extends IChart {
  chart: any,
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{
  @Input() chartData: {
    title: string,
    type: string,
    data: IChart,
  };
  public dataSource: IDataSource;
  public seriesSource: any;

  public ngOnInit() {
    const dataSource: IDataSource = {
      chart: {
        caption: this.chartData.title,
        xAxisName: "Date",
        yAxisName: "No. of Cases",
        setAdaptiveYMin:"1",
        
        anchorradius: "5",
        showvalues: "0",
        numvdivlines: "10",
        theme: "fusion",
      },
    };

    if (this.chartData.data) dataSource.data = this.chartData.data;
    if (this.chartData.data.categories) dataSource.categories = this.chartData.data.categories;
    if (this.chartData.data.dataset) dataSource.dataset = this.chartData.data.dataset;
    this.dataSource = dataSource;
  }
}