import { Component, OnInit, Input } from '@angular/core';
import { SearchShowsService } from '../services/searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {
  _shows: ISearchView[];//getting data from API for the searchedTerm

  searchTerm: string;//for storing searched string from router params.

  subscription$$: Subscription;

  constructor(private currServ: SearchShowsService, private actRoute: ActivatedRoute, private _router: Router) {  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(routeParams => this.getSearchedShows(routeParams['searchTerm']));
  }

  getSearchedShows(searchValue: string) {

    this.searchTerm = searchValue;
    if (this.searchTerm) {
     this.subscription$$= this.currServ.getShows(this.searchTerm).subscribe(data => this._shows = data);
    }
  }

  getShowInfo(showId: number,showName :string) {
    this._router.navigate(['/show-info', showId],{ queryParams: {'showName' :showName}});
  }


  ngOnDestroy(){
    if (this.subscription$$) {
      this.subscription$$.unsubscribe();
      }
  }


}
