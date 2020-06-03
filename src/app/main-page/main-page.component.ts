import { Component, OnInit } from '@angular/core';
import { SearchShowsService } from '../services/searchshows-service/search-shows.service';
import { IShowView } from '../interfaces/ishow-view';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  _showRating: IShowView[];//for Rating
  _showComedy: IShowView[]; //for Comedy genre
  _showScienceFiction: IShowView[];//for science fiction genre
  _showDrama: IShowView[]; //for drama genre
  subscription$$: Subscription; //for subscribe and unsbscribe
  isLoading: boolean;//for progress bar

  constructor(private currServ: SearchShowsService, private _router: Router) {}

  /**
   * Slide config of main page component slick carosel Styles
   */
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    lazyLoad: 'ondemand',
    useCSS: true,
    autoplay: true,
    initialSlide: 0,
    opacity: 0.85,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  /**
   * on init for loading progress bar and calling allShows for mainpage
   */
  ngOnInit(): void {
    this.isLoading = true;
    this.getShows();
    this.isLoading = false;
  }

  /**
   * Gets shows
   * Calling getAllShows Service
   */
  getShows() {
    this.subscription$$ = this.currServ.getAllShows().subscribe(
      (data: IShowView[]) => this.getMainPageShows(data),
      error => {
        this._router.navigate(['/error']);
      }
    );
  }

  /**
   * Gets main page shows
   * @param show
   * getting all Genre shows
   */
  getMainPageShows(show: IShowView[]) {
    this._showRating = this.currServ.getShowsByRating(show, 8.5);
    this._showComedy = this.currServ.getShowsByGenre(show, 'Comedy');
    this._showScienceFiction = this.currServ.getShowsByGenre(
      show,
      'Science-Fiction'
    );
    this._showDrama = this.currServ.getShowsByGenre(show, 'Drama');
  }

  /**
   * Calls show info
   * called showInfo Api when user clicks the show image
   * based on selected show id
   * @param showId
   * @param showName
   */

  callShowInfo(showId: number, showName: string) {
    this._router.navigate(['/show-info', showId], {
      queryParams: { showName: showName }
    }); //QueryParam for setting show name
  }

  //Unscribe observables from memory
  ngOnDestroy(): void {
    if (this.subscription$$) {
      this.subscription$$.unsubscribe();
    }
  }
}
