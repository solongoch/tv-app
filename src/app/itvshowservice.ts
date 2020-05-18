import { Observable } from 'rxjs';
import { IShowinfo } from './ishowinfo';

export interface Itvshowservice {
  getShowInfo(id: number): Observable<IShowinfo>
}
