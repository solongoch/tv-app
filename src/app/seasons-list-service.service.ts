import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISeasonListData } from './iseason-list-data';

@Injectable({
  providedIn: 'root'
})
export class SeasonsListServiceService {

  constructor(private httpClient : HttpClient) { }

  getShowSeasons(showId: number){
    return this.httpClient.get<ISeasonListData[]>(`${environment.baseurl}${environment.seasonEndpoint}${showId}/seasons`);
  }
}


// http://api.tvmaze.com/shows/139/seasons
  // https://www.tvmaze.com/shows/139/girls/episodes
