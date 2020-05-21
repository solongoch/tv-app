import { Component, OnInit } from '@angular/core';
import { IShowinfo } from '../interfaces/ishowinfo';
import { TvshowService } from 'src/app/show-info-service/tvshow.service';

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
    this.tvshowService.getShowInfo(1)
    .subscribe(data => this.show = data)
  }

}
