import { Component, OnInit, Input } from '@angular/core';
import { SearchShowsService } from '../searchshows-service/search-shows.service';
import { ISearchView } from '../interfaces/isearch-view';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {

  @Input() _shows: ISearchView[];//getting data from header component
  // selected_show_id: number;
  // public childComponentLoaded: boolean = false;

//  @Input() parentComponenet: boolean;

  subscription$$: Subscription;
  constructor(private currServ: SearchShowsService) { }

  ngOnInit(): void {
    // console.log(this. parentComponenet);

    // this.subscription$$ = this.currServ.getShows("Girls").subscribe( (data : ISearchView[]) => this._shows = data);
  }
  // public loadChildComponent(showId: number) {
  //   this.childComponentLoaded=true;
  //   this.selected_show_id=showId;
  //  this. parentComponenet =false;
  //  console.log("child loading :", this. parentComponenet);
  // }

}
