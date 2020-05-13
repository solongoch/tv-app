import { Component, OnInit } from '@angular/core';
import { IShowView } from '../ishow-view';
import { ShowDataService} from '../show-data.service';


@Component({
  selector: 'app-show-single-search',
  templateUrl: './show-single-search.component.html',
  styleUrls: ['./show-single-search.component.css']
})
export class ShowSingleSearchComponent implements OnInit {
  _current : IShowView;

  constructor(private currServ : ShowDataService) { }

  ngOnInit(): void {
    this.currServ.getSingleShow("Girls").subscribe(data => this._current=data);

  }

}
