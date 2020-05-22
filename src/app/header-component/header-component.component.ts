import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchShowsService } from '../searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

export class HeaderComponentComponent implements OnInit {
  searchField = new FormControl('', Validators.minLength(3));
  subscription$$: Subscription;
  _shows: ISearchView[];
  parentComponenet : boolean;

  constructor(private currServ: SearchShowsService) { }

  ngOnInit(): void {

    this.searchField.valueChanges
      .subscribe((searchValue: string) => this.getShows(searchValue))
  }

  //Api call to get data for the given shows
  getShows(searchValue: string) {
    this.parentComponenet=true;
    if (searchValue && searchValue.length > 2) {
      const userInput = searchValue.trim();
      this.subscription$$ = this.currServ.getShows(userInput).
        subscribe(data => {
          this._shows = data;
          console.log(data);
        });

    }
  }

  //Clear search bar using cross icon
  clearSearchField() {
    this.searchField.setValue('');
  }

  //Unscribe observables for memory leak
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
      this.subscription$$.unsubscribe();
    }
  }
}
