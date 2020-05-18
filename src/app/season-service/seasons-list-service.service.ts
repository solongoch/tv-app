import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISeasonListData } from '../iseason-list-data';
import { map } from 'rxjs/operators';
import { ISeasonListView } from '../iseason-list-view';

@Injectable({
  providedIn: 'root'
})
export class SeasonsListServiceService {

  constructor(private httpClient : HttpClient) { }

  getShowSeasons(showId : number){
    return this.httpClient.get<ISeasonListData[]>(`${environment.url}${environment.episodesEndpoint}${showId}/seasons`).pipe(map(( seasons:ISeasonListData[] )=>seasons.map(season => this.transformISeasonDataToView(season))));
  }


  transformISeasonDataToView(season: ISeasonListData): ISeasonListView {
    return {
      seasonId : season.id,
      seasonNumber : season.number
    }
  }
}





