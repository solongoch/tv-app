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
 _shows: ISearchView[];//getting data from API
  // @Input() _searchTerm : FormControl;

  searchTerm: string;

  showThisComponent: boolean = true;////used to hide show Search when user selects the show

  subscription$$: Subscription;
  childComponentLoaded: boolean;
  selected_show_id: number;
  parentComponenet: boolean;


  constructor(private currServ: SearchShowsService, private actRoute: ActivatedRoute, private _router: Router) {
    console.log("in");
  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(routeParams => this.getSearchedShows(routeParams['searchTerm']));
    // console.log("search term: " + routeParams['searchTerm'] + " End")

  }

  getSearchedShows(searchValue: string) {

    this.searchTerm = searchValue;
    console.log("search term111" + this.searchTerm);
    this.currServ.getShows(searchValue.trim()).subscribe(data => {this._shows = data;
      });

  }


  getShowInfo(showId: number) {
    // this.showThisComponent = false;//Hide show Search when user selects the show
    this._router.navigate(['/show-info', showId]);
  }


}
