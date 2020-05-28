import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchShowsService } from '../services/searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  searchField = new FormControl('');


  constructor(private _router : Router) { }

  ngOnInit(): void {
    this.searchField.valueChanges
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
}

}
