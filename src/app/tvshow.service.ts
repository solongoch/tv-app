import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { IShowinfo } from './interfaces/ishowinfo';

interface IShowInfoData {
    name: string,
    image: {medium: string},
    summary: string,
    network: {
      name: string
      country:
      {name: string}},
    genres: string[],
    schedule: {time: number},
    language: string
}

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient: HttpClient) { }

  getShowInfo(id: number) {
    return this.httpClient.get<IShowInfoData>(
      `${environment.rootUrl}${environment.showendpoint}${id}`).pipe(
        map(data => this.transformToIShowInfo(data))
      )
  }

  transformToIShowInfo(data: IShowInfoData) : IShowinfo {
    return {
      name: data.name,
      image: data.image.medium,
      description: data.summary.replace(/(<([^>]+)>)/ig,""),
      country: data.network.country.name,
      genre: data.genres.join('|'),
      runtime: data.schedule.time,
      network: data.network.name,
      language: data.language

    };
  }
}
