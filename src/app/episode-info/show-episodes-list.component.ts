import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../services/episode-info-service/episode-service.service';
import { IEpisodeView } from '../interfaces/iepisode-view';
import { Subscription } from 'rxjs' ;
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



  constructor(private currServ: EpisodeServiceService, private actRoute: ActivatedRoute) {
    this.showId = this.actRoute.snapshot.params.id;

  //getting  show name from queryparams
    this.actRoute.queryParams.subscribe(params => {this.showName = params.name; console.log(this.showName)});
   }


  ngOnInit(): void {
    this.subscription$$ = this.currServ.getShowSeasons(this.showId).subscribe( (data : ISeasonsView[]) => this._seasons = data);
     this.subscription1$$ = this.currServ.getShowEpisodes(this.showId).subscribe( (data : IEpisodeView[])=>  this._episodes = data );
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
