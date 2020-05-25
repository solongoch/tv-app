import { Component, OnInit, Input } from '@angular/core';
import { SearchShowsService } from '../searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {

  @Input() _shows: ISearchView[];//getting data from header component
  // selected_show_id: number;
  // public childComponentLoaded: boolean = false;
  searchValue : string;

//  @Input() parentComponenet: boolean;

  subscription$$: Subscription;
  childComponentLoaded: boolean;
  selected_show_id: number;
  parentComponenet: boolean;
  constructor(private currServ: SearchShowsService, private actRoute: ActivatedRoute) {

    // this.searchValue = this.actRoute.snapshot.params.sV;
  }

  ngOnInit(): void {


    // this.subscription$$ = this.currServ.getShows(this.searchValue).subscribe( (data : ISearchView[]) => this._shows = data);
  }
  public loadChildComponent(showId: number) {
    this.childComponentLoaded=true;
    this.selected_show_id=showId;
   this. parentComponenet =false;
   console.log("child loading :", this. parentComponenet);
  }


}
