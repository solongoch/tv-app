import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../episode-service/episode-service.service';
import { IEpisodeView } from '../interfaces/iepisode-view';
import { Subscription } from 'rxjs' ;
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-episodes-list',
  templateUrl: './show-episodes-list.component.html',
  styleUrls: ['./show-episodes-list.component.css']
})
export class ShowEpisodesListComponent implements OnInit {

  _episodes: IEpisodeView[];
   subscription$$: Subscription;
   show_id: number;



  constructor(private currServ: EpisodeServiceService, private actRoute: ActivatedRoute) {
    this.show_id = this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.subscription$$ = this.currServ.getShowEpisodes(this.show_id).subscribe( (data : IEpisodeView[])=>  this._episodes = data );
  }

  //Unscribe observables for memory leak
  ngOnDestroy(): void {
    if (this.subscription$$ != null) {
    this.subscription$$.unsubscribe();
    }
  }
}
