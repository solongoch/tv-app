import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ISearchData } from '../interfaces/isearch-data';
import { ISearchView } from '../interfaces/isearch-view';

@Injectable({
  providedIn: 'root'
})
export class SearchShowsService {

  constructor(private http: HttpClient) { }

  getShows(showName: string) {
    return this.http.get<ISearchData[]>(`${environment.rootUrl}${environment.searchendpoint}${showName}`).pipe(map((data: ISearchData[]) => data.map(item => this.transformToISearchView(item))));
  }

  transformToISearchView(data: ISearchData): ISearchView {
    return {
      id: data.show.id,
      name: data.show.name,
      image: data.show.image.medium
    }
  }
}
