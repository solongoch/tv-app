import { IEpisodeInfoService } from 'src/app/interfaces/iepisode-info-service';
import { IEpisodeView } from 'src/app/interfaces/iepisode-view';
import { ISeasonsView } from 'src/app/interfaces/iseasons-view';
import { of } from 'rxjs';


export class EpisodeServiceFake implements IEpisodeInfoService
{

  private _fakeEpisodes : IEpisodeView={
    episodeName: "Romance Dawn Story",
    episodeNumber: 1,
    airdate: new Date()

  };
  private _fakeSeasons : ISeasonsView={
  seasonId: 12407,
  seasonNumber: 5
  };

  getShowEpisodes(seasonId: number): import("rxjs").Observable<IEpisodeView[]> {
    return of(this._fakeEpisodes[0]);
  }
  getShowSeasons(showId: number): import("rxjs").Observable<ISeasonsView[]> {
    return of(this._fakeSeasons[0]);
  }


}
