import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowSearchData} from './ishow-search-data';
import { IShowView } from './ishow-view';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  constructor(private httpClient : HttpClient) { }

  getSingleShow(showName: string){
    return this.httpClient.get<IShowSearchData>(`${environment.baseurl}${environment.endPoint}${showName}`).pipe(map(data =>this.transformToIShowView(data)));
  }
  transformToIShowView( searchData : IShowSearchData) : IShowView{

    return {
      name : searchData.name,
      language:searchData.language,
      genre: searchData.genres.join('|'),
      rating:searchData.rating.average,
      image:searchData.image.medium,
      summary: searchData.summary.replace(/(<([^>]+)>)/ig,"")

    };

  }


}
