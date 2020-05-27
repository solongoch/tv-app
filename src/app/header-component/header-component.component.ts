import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchShowsService } from '../searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

export class HeaderComponentComponent implements OnInit {


  searchField = new FormControl('');



  subscription$$: Subscription;
  _shows: ISearchView[];
  //added for hiding the show search component when user clicks clear button
  showSearchComponent: boolean = true;
  searchTerm: string;

  constructor(private currServ: SearchShowsService, private _router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchField.valueChanges
      .subscribe((searchValue: string) => this.getShows(searchValue));

      this.searchTerm = this.actRoute.snapshot.queryParamMap.get('searchTerm');

    if (this.searchTerm) {
      this.searchField.setValue(this.searchTerm);
      this.currServ.getShows(this.searchTerm.trim()).
        subscribe(data => {
          this._shows = data;
        });

    }

  }
  //Api call to get data for the given shows
  getShows(searchValue: string) {
    //added for hiding the show search component when user clicks clear button
    this.showSearchComponent = true;
    if (searchValue.trim()) {
      this.showSearchPage();
      this.subscription$$ = this.currServ.getShows(searchValue.trim()).
        subscribe(data => {
          this._shows = data;
        });
    }
  }
  // to resolve issue with same component not loading with different show id's.
  showSearchPage() {
    this._router.navigate(['/mainpage']);
  }

  //Clear search bar using cross icon
  clearSearchField() {
    this.searchField.setValue('');
    //added  and set to false to hide the show search component when user clicks clear button
    this.showSearchComponent = false;
  }

  //Unscribe observables for memory leak
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
      this.subscription$$.unsubscribe();
    }
  }
}
