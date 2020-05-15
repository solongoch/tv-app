import { Component, OnInit } from '@angular/core';
import { SeasonsListServiceService} from '../season-service/seasons-list-service.service';
import { ISeasonListView } from '../iseason-list-view';

@Component({
  selector: 'app-seasons-list-component',
  templateUrl: './seasons-list-component.component.html',
  styleUrls: ['./seasons-list-component.component.css']
})
export class SeasonsListComponentComponent implements OnInit {

  _seasonsView : ISeasonListView[];
  constructor(private seasonService :SeasonsListServiceService) { }

  ngOnInit(): void {
    this.seasonService.getShowSeasons(73).subscribe(seasonsView => this._seasonsView=seasonsView);
  }


}
