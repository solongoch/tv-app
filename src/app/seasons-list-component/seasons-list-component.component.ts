import { Component, OnInit } from '@angular/core';
import { SeasonsListServiceService} from '../seasons-list-service.service';
import { ISeasonListData} from '../iseason-list-data'

@Component({
  selector: 'app-seasons-list-component',
  templateUrl: './seasons-list-component.component.html',
  styleUrls: ['./seasons-list-component.component.css']
})
export class SeasonsListComponentComponent implements OnInit {

  _current : ISeasonListData[];
  constructor(private currServ :SeasonsListServiceService) { }

  ngOnInit(): void {
    this.currServ.getShowSeasons(139).subscribe(data => this._current=data);
  }


}
