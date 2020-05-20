import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../episode-service/episode-service.service';
import { IEpisodeView } from '../interfaces/iepisode-view';
import { Subscription } from 'rxjs' ;
@Component({
  selector: 'app-show-episodes-list',
  templateUrl: './show-episodes-list.component.html',
  styleUrls: ['./show-episodes-list.component.css']
})
export class ShowEpisodesListComponent implements OnInit {

  _episodes: IEpisodeView[];
   subscription$$: Subscription;


  constructor(private currServ: EpisodeServiceService) { }

  ngOnInit(): void {
    this.subscription$$ = this.currServ.getShowEpisodes(73).subscribe( (data : IEpisodeView[])=>  this._episodes = data );
  }

  //Unscribe observables for memory leak
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
    this.subscription$$.unsubscribe();
    }
  }
}
