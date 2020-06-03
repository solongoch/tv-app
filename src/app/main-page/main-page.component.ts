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
  _showRating: IShowView[];
  _showComedy: IShowView[];
  _showScienceFiction: IShowView[];
  _showDrama: IShowView[];
  subscription$$: Subscription;
  isLoading: boolean;

  constructor(private currServ: SearchShowsService, private _router: Router) {}

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
      // You can unslick at a given breakpoint now by adding:
    ]
  };

  ngOnInit(): void {
    this.isLoading = true;
    this.getShows();
    this.isLoading = false;
  }

  getShows() {
    this.subscription$$ = this.currServ.getAllShows().subscribe(
      (data: IShowView[]) => this.getMainPageShows(data),
      error => {
        this._router.navigate(['/error']);
      }
    );
  }

  getMainPageShows(show: IShowView[]) {
    this._showRating = this.currServ.getShowsByRating(show, 8.5);
    this._showComedy = this.currServ.getShowsByGenre(show, 'Comedy');
    this._showScienceFiction = this.currServ.getShowsByGenre(
      show,
      'Science-Fiction'
    );
    this._showDrama = this.currServ.getShowsByGenre(show, 'Drama');
  }

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
