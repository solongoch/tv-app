import { Observable } from 'rxjs';
import { IShowinfo } from '../../interfaces/ishowinfo';

export interface Itvshowservice {
  getShowInfo(id: number): Observable<IShowinfo>
}
