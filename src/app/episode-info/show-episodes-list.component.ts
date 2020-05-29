import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../services/episode-info-service/episode-service.service';
import { IEpisodeView } from '../interfaces/iepisode-view';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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
  showName
  _seasons: ISeasonsView[];
  seasonId: number;



  constructor(private currServ: EpisodeServiceService, private actRoute: ActivatedRoute) {
    this.showId = this.actRoute.snapshot.params.id;


  }


  ngOnInit(): void {
    //getting  show name from queryparams
    this.actRoute.queryParams.subscribe(params => { this.showName = params.showName; });
    this.subscription$$ = this.currServ.getShowSeasons(this.showId).subscribe((data: ISeasonsView[]) => this._seasons = data);

  }
//geeting episod information for the selected season Id

  getSelectedSeasonId($event) {
    this.seasonId = this._seasons[$event.index].seasonId;
    this.subscription1$$ = this.currServ.getShowEpisodes(this.seasonId).subscribe((data: IEpisodeView[]) =>
      this._episodes = data);
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
