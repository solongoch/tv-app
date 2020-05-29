import { ISearchShowService } from 'src/app/interfaces/isearch-show-service';
import { IShowView } from 'src/app/interfaces/ishow-view';
import { ISearchView } from 'src/app/interfaces/isearch-view';
import { of } from 'rxjs';


export class SearchShowsServiceFake implements ISearchShowService {

  private _fakeShows: ISearchView = {
    id: 139,
    name: "Girls",
    image: ''
  };

  private _fakeAllShows: IShowView = {
    showId: 1 ,
    showName: "Girls",
    image: '',
    rating: 9,
    genres: ['Comedy','Drama']
  };
  getShows(showName: string): import("rxjs").Observable<ISearchView[]> {
    return of(this._fakeShows[0]);

  }
  getAllShows(): import("rxjs").Observable<IShowView[]> {
    return of(this._fakeAllShows[0]);
  }

}


