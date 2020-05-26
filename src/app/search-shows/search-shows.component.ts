import { Component, OnInit, Input } from '@angular/core';
import { SearchShowsService } from '../searchshows-service/search-shows.service';
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

  @Input() _shows: ISearchView[];//getting data from header component
  @Input() _searchTerm : FormControl;


  showThisComponent: boolean = true;////used to hide show Search when user selects the show

  subscription$$: Subscription;
  childComponentLoaded: boolean;
  selected_show_id: number;
  parentComponenet: boolean;
  constructor(private currServ: SearchShowsService, private actRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit(): void {
  }

  getShowInfo(showId: number) {
    this.showThisComponent = false;//Hide show Search when user selects the show
    this._router.navigate(['/show-info', showId],{queryParams:{'searchTerm':this._searchTerm.value}});
  }

  toggle() {
    if (this._shows && this.showThisComponent) {
      return true;
    }
  }

}
