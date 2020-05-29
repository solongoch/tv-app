
import { Observable } from 'rxjs';
import { IShowView } from './ishow-view';
import { ISearchView } from './isearch-view';

export interface ISearchShowService {

  getShows(showName: string): Observable<ISearchView[]>;
  getAllShows(): Observable<IShowView[]>;

}
