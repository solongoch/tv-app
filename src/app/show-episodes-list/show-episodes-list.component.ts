import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../episode-service.service';
import { IEpisodeView } from '../iepisode-view';

@Component({
  selector: 'app-show-episodes-list',
  templateUrl: './show-episodes-list.component.html',
  styleUrls: ['./show-episodes-list.component.css']
})
export class ShowEpisodesListComponent implements OnInit {

  _episodes : IEpisodeView[];
  constructor(private currServ : EpisodeServiceService) { }


  ngOnInit(): void {

    this.currServ.getShowEpisodes(431).subscribe(data => this._episodes=data);
  }
}
