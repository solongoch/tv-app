import { Observable } from 'rxjs';
import { IEpisodeView } from './iepisode-view';
import { ISeasonsView } from './iseasons-view';


export interface IEpisodeInfoService {
  
  getShowEpisodes(seasonId: number) : Observable<IEpisodeView[]>;

  getShowSeasons(showId: number) :Observable<ISeasonsView[]>



}
