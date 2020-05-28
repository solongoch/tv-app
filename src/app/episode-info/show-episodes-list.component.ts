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
   show_id: number;
   _seasons: ISeasonsView[];



  constructor(private currServ: EpisodeServiceService, private actRoute: ActivatedRoute) {
    this.show_id = this.actRoute.snapshot.params.id;
   }


  ngOnInit(): void {
    this.subscription$$ = this.currServ.getShowSeasons(this.show_id).subscribe( (data : ISeasonsView[]) => this._seasons = data);
     this.subscription1$$ = this.currServ.getShowEpisodes(this.show_id).subscribe( (data : IEpisodeView[])=>  this._episodes = data );
  }

  //Unscribe observables from memory
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
    this.subscription$$.unsubscribe();
    }
    if (this.subscription1$$ != null) {
      this.subscription1$$.unsubscribe();
      }
  }
}
