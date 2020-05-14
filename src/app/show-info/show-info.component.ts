import { Component, OnInit } from '@angular/core';
import { IShowinfo } from '../ishowinfo';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  show: IShowinfo
  constructor(private tvshowService: TvshowService) {

  }

  ngOnInit(): void {
    this.tvshowService.getShowInfo(139)
    .subscribe(data => this.show = data)
  }

}
