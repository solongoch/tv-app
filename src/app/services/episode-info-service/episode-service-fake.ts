import { IEpisodeInfoService } from 'src/app/interfaces/iepisode-info-service';
import { IEpisodeView } from 'src/app/interfaces/iepisode-view';
import { ISeasonsView } from 'src/app/interfaces/iseasons-view';
import { of } from 'rxjs';

export class EpisodeServiceFake implements IEpisodeInfoService {
  private _fakeEpisodes: IEpisodeView = {
    episodeName: 'Romance Dawn Story',
    episodeNumber: 1,
    airdate: new Date(),
    airtime: '14:30',
    image: '',
    runtime: 60,
    summary:
      "When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates."
  };
  
  private _fakeSeasons: ISeasonsView = {
    seasonId: 12407,
    seasonNumber: 5
  };

  getShowEpisodes(seasonId: number): import('rxjs').Observable<IEpisodeView[]> {
    return of(this._fakeEpisodes[0]);
  }
  getShowSeasons(showId: number): import('rxjs').Observable<ISeasonsView[]> {
    return of(this._fakeSeasons[0]);
  }
}
