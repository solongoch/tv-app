import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEpisodeData } from './iepisode-data';
import { environment } from 'src/environments/environment';
import { IEpisodeView } from './iepisode-view';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeServiceService {
constructor(private httpClient: HttpClient) { }

getShowEpisodes(showId: number) {
  return this.httpClient.get<IEpisodeData[]>(`${environment.baseurl}${environment.episodeEndpoint}${showId}/episodes`).pipe(map(data => {
    return {

    episodeName: data.name,
    seasonNumber: data.season,
    episodeNumber: data.number,
    airdate: data.airdate
    }
   } ));
}

  // trasformToIEpisodeView(data: IEpisodeData[]): IEpisodeView[]
  //  {
  //     return {

  //   episodeName: data.name,
  //   seasonNumber: data.season,
  //   episodeNumber: data.number,
  //   airdate: data.airdate
  //   }

  // }


}
