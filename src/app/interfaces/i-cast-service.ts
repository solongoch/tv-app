import { Observable } from 'rxjs';
import { ICastInfo } from './icast-info';

export interface ICastService {
  getCast(showId: number): Observable<ICastInfo[]>;
}
