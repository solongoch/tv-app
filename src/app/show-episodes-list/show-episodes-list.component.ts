import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from '../episode-service/episode-service.service';
import { IEpisodeView } from '../interfaces/iepisode-view';

@Component({
  selector: 'app-show-episodes-list',
  templateUrl: './show-episodes-list.component.html',
  styleUrls: ['./show-episodes-list.component.css']
})
export class ShowEpisodesListComponent implements OnInit {

  _episodes : IEpisodeView[];
  episodeColumns  :  string[] = ['episodeNumber', 'airDate', 'episodeName'];

  constructor(private currServ : EpisodeServiceService) { }


  ngOnInit(): void {

    this.currServ.getShowEpisodes(73).subscribe((data : IEpisodeView[]) => {
      this._episodes=data
    });

  }
}
