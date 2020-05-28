import { Component, OnInit, HostListener } from '@angular/core';
import { SearchShowsService } from '../services/searchshows-service/search-shows.service';
import { IShowView } from '../interfaces/ishow-view';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  _showRating: IShowView[];
  _showComedy: IShowView[];
  _showScienceFiction: IShowView[];;
  _showDrama: IShowView[];
  subscription$$: Subscription;





  constructor(private currServ: SearchShowsService) { }

  slideConfig = {
    "slidesToShow": 7,
    "slidesToScroll": 1,
    "infinite": false,
    'arrows': true,
    'lazyLoad': 'ondemand',
    "useCSS": true,
    "autoplay": true,
    'edgeFriction': 0.15,
    "initialSlide": 0
  };

  ngOnInit(): void {

    this.getShows();
  }



  getShows() {
    this.subscription$$ = this.currServ.getAllShows().subscribe((data: IShowView[]) => this.getMainPageShows(data));


  }

  getMainPageShows(show: IShowView[]) {
    this._showRating = this.currServ.getShowsByRating(show, 8.5);
    this._showComedy = this.currServ.getShowsByGenre(show, 'Comedy');
    this._showScienceFiction = this.currServ.getShowsByGenre(show, "Science-Fiction");
    this._showDrama = this.currServ.getShowsByGenre(show, 'Drama');
  }

  //Unscribe observables from memory
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
      this.subscription$$.unsubscribe();
    }
  }

}
