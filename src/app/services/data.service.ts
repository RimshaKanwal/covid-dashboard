import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface IParams {
  country: string,
  day?: string,
}

export interface IStat {
  country: string,
  cases: {
    new: string,
    active: number,
    critical: number,
    recovered: number,
    total: number
  },
  deaths: {
    new: string,
    total: number
  },
  tests: {
    total: number
  },
  day: string,
  time: string,
}

@Injectable({ providedIn: 'root' })
export class DataService {
  public day: string;
  constructor(
   private http: HttpClient,
  ) { }

  public getCountries(): Observable<string[]>{
    return this.get('countries').pipe(
      map((countries: any) => countries.response)
    );
  }

  public getHistory(params: IParams): Observable<IStat[]> {
    if (params.day) this.day = params.day
    return this.get('history', params).pipe(
      map((data: any) => data.response),
      map(this.transformHistoryResponse.bind(this)),
    );
  }

  public getStatistics(country?: string): Observable<IStat[]> {
    const params = country ? {country} : null;
    return this.get('statistics', params).pipe(
      map((data: any) => data.response),
      map(this.transformStatisticsResponse.bind(this)),
    )
  }
  private get<T>(endpointUrl: string, params?: any) {
    return this.http.get<T>(
      `https://covid-193.p.rapidapi.com/${endpointUrl}`,
      {
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "a9afa82a9bmshbedc13e2de07ad2p125b6cjsn66cede50ab4f"
        },
        params: params
      }
    );
  }

  private transformHistoryResponse(stats:any): IStat[] {
    let mappedStats: IStat[]= [];
    for (let stat of stats) {
      if (mappedStats.length > 29) break
      if (mappedStats.length >= 1 && mappedStats[mappedStats.length-1].day === stat.day) continue;
      mappedStats.push({
        country: stat.country,
      cases: {
        new: stat.cases.new,
        active: stat.cases.active,
        critical: stat.cases.critical,
        recovered: stat.cases.recovered,
        total: stat.cases.total
      },
      deaths: {
        new: stat.deaths.new,
        total: stat.deaths.total
      },
      tests: {
        total: stat.tests.total
      },
      day: stat.day,
      time: stat.time,
      })
    }
    return mappedStats;
  }

  public transformStatisticsResponse(stats: any): IStat[] {
    let mappedStats: IStat[]= [];
    stats.map( (stat: IStat) => {
      mappedStats.push({
        country: stat.country,
      cases: {
        new: stat.cases.new,
        active: stat.cases.active,
        critical: stat.cases.critical,
        recovered: stat.cases.recovered,
        total: stat.cases.total
      },
      deaths: {
        new: stat.deaths.new,
        total: stat.deaths.total
      },
      tests: {
        total: stat.tests.total
      },
      day: stat.day,
      time: stat.time,
      })
    });
    return mappedStats;
  }
}