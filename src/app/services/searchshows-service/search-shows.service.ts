import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ISearchData } from '../../interfaces/isearch-data';
import { ISearchView } from '../../interfaces/isearch-view';
import { IShowView } from '../../interfaces/ishow-view';


interface IShowData {
  id: number,
  image: {
    medium: string
  },
  genres: string[],
  rating: {
    average: number
  }
 }

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
      id: data.show?.id,
      name: data.show?.name,
      image: data.show.image?.medium
    }
  }

  // Used to display shows in home page based on Genres and Rating API:http://api.tvmaze.com/shows


  getAllShows() {
    return this.http.get<IShowData[]>(`${environment.mainPage}`)
    .pipe(map(data => data.map(show => this.transformToIShowView(show))))
  }


//Transorming into IShow View
  transformToIShowView(data: IShowData) : IShowView {
    return {
     id: data.id,
     image: data.image?data.image.medium: '',
     rating: data.rating?data.rating.average : null,
     genres: data.genres,
    }
   }


//Filtering the IShowView[] based on given Genre

   getShowsByGenre(showList: IShowView[],genre: string) {
    return showList.filter(show => show.genres.indexOf(genre) !== -1);
  }

  //Filtering the IShowView[] based on rating
  getShowsByRating(showList: IShowView[], minRating: number) {
    return showList.filter(show => show.rating > minRating);
  }

}
