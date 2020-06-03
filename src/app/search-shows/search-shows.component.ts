import { Component, OnInit } from '@angular/core';
import { SearchShowsService } from '../services/searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {
  _shows: ISearchView[]; //getting data from API for the searchedTerm
  searchTerm: string; //for storing searched string from router params.
  subscription$$: Subscription; //for observable subscription
  isLoading: boolean; //for progress bar

  constructor(
    private currServ: SearchShowsService,
    private actRoute: ActivatedRoute,
    private _router: Router
  ) {}

  // getting SearchTerm from Queryparam
  ngOnInit(): void {
    this.actRoute.params.subscribe(routeParams =>
      this.getSearchedShows(routeParams['searchTerm'])
    );
  }

  /**
   * getSearchedShows()
   * Calls search Show api for the corressponding searchterm
   * to get all shows based on searchterm
   * @param searchValue
   */
  getSearchedShows(searchValue: string) {
    this.searchTerm = searchValue;
    if (this.searchTerm) {
      this.isLoading = true;
      this.subscription$$ = this.currServ.getShows(this.searchTerm).subscribe(
        (data: ISearchView[]) => {
          this._shows = data;
          this.isLoading = false;
        },
        error => {
          this._router.navigate(['/error']);
        }
      );
    }
  }

  /**
   * getShowInfo() Navigate to ShowInfo Component when user clicks the image
   * @param showId
   * @param showName
   *
   */
  getShowInfo(showId: number, showName: string) {
    this._router.navigate(['/show-info', showId], {
      queryParams: { showName: showName }
    });
  }

  // unsubscribe the observable subscription
  ngOnDestroy() {
    if (this.subscription$$) {
      this.subscription$$.unsubscribe();
    }
  }
}
