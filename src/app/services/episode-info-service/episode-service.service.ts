import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEpisodeData } from 'src/app/interfaces/iepisode-data';
import { environment } from 'src/environments/environment';
import { IEpisodeView } from 'src/app/interfaces/iepisode-view';
import { map } from 'rxjs/operators';
import { ISeasonsView } from 'src/app/interfaces/iseasons-view';
import { IEpisodeInfoService } from 'src/app/interfaces/iepisode-info-service';

interface ISeasonsData {
  id: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeServiceService implements IEpisodeInfoService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @param episodeEndpoint  // http://api.tvmaze.com/seasons/263/episodes
   *Get Episode Information
   *Input season id.
   */
  getShowEpisodes(seasonId: number) {
    return this.httpClient
      .get<IEpisodeData[]>(
        `${environment.rootUrl}${environment.episodeEndpoint}${seasonId}/episodes`
      )
      .pipe(
        map((data: IEpisodeData[]) =>
          data.map(item => this.transformToIEpisodeView(item))
        )
      );
  }

  transformToIEpisodeView(data: IEpisodeData): IEpisodeView {
    return {
      episodeName: data.name,
      episodeNumber: data.number,
      airdate: new Date(data.airstamp),
      airtime: data.airtime,
      image: data.image?.original,
      summary: data.summary
        ? data.summary.replace(/(<([^>]+)>)/gi, '')
        : ` We don't have a episode summary `,
      runtime: data.runtime
    };
  }

  getShowSeasons(showId: number) {
    return this.httpClient
      .get<ISeasonsData[]>(
        `${environment.rootUrl}${environment.showendpoint}${showId}${environment.seasonendpoint}`
      )
      .pipe(
        map((data: ISeasonsData[]) =>
          data.map(item => this.transformToISeasonView(item))
        )
      );
  }

  transformToISeasonView(data: ISeasonsData): ISeasonsView {
    return {
      seasonId: data.id,
      seasonNumber: data.number
    };
  }
}
