import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchField = new FormControl();

  constructor(private _router: Router) {}

  /**
   ** getting the search term onvaluechange of search field
   *  setting 1000 as delay time
   */
  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchTerm: string) => this.getShows(searchTerm.trim()));
  }

  //navigating to search-shows component with SearchTerm
  getShows(searchTerm: string) {
    if (searchTerm) {
      this._router.navigate(['/searchshows', searchTerm]);
    }
  }

  //Clear search bar using cross icon
  clearSearchField() {
    this.searchField.setValue('');
    this._router.navigate(['/mainpage']);
  }
}
