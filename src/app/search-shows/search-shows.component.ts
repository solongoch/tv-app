import { Component, OnInit } from '@angular/core';
import { SearchShowsService } from '../searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {

  _shows: ISearchView[];
  subscription$$: Subscription;

  constructor(private currServ: SearchShowsService) { }

  ngOnInit(): void {

    this.subscription$$ = this.currServ.getShows("Girls").subscribe( (data : ISearchView[]) => this._shows = data);


  }
  //Unscribe observables for memory leak
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
      this.subscription$$.unsubscribe();
    }
  }
}
