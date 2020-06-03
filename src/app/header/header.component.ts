import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  searchField = new FormControl('', Validators.minLength(2));

  constructor(private _router: Router) {}

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
