import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../services/episode-info-service/episode-service.service';
import { IEpisodeView } from '../interfaces/iepisode-view';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ISeasonsView } from '../interfaces/iseasons-view';

@Component({
  selector: 'app-show-episodes-list',
  templateUrl: './show-episodes-list.component.html',
  styleUrls: ['./show-episodes-list.component.css']
})

export class ShowEpisodesListComponent implements OnInit {
  _episodes: IEpisodeView[];
  subscription$$: Subscription;
  subscription1$$: Subscription;
  showId: number;
  _seasons: ISeasonsView[];
  seasonId: number;
  isLoading: boolean;

  constructor(
    private currServ: EpisodeServiceService,
    private actRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.showId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.subscription$$ = this.currServ.getShowSeasons(this.showId).subscribe(
      (data: ISeasonsView[]) => {
        this._seasons = data;
      },
      error => {
        this._router.navigate(['/error']);
      }
    );
  }

  //getting episod information for the selected season: passing season id
  getSelectedSeasonId($event) {
    this.isLoading = true;
    this.seasonId = this._seasons[$event.index].seasonId;
    this.subscription1$$ = this.currServ
      .getShowEpisodes(this.seasonId)
      .subscribe(
        (data: IEpisodeView[]) => {
          this.filterEpisodeList(data);
          this.isLoading = false;
        },
        error => {
          this._router.navigate(['/error']);
        }
      );
  }

  filterEpisodeList(episodeList: IEpisodeView[]) {
    this._episodes = episodeList.filter(
      episode => episode.episodeNumber !== null
    );
  }
  
  //Unscribe observables from memory
  ngOnDestroy(): void {
    if (this.subscription$$) {
      this.subscription$$.unsubscribe();
    }
    if (this.subscription1$$) {
      this.subscription1$$.unsubscribe();
    }
  }
}
