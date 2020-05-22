import { Component, OnInit, Input } from '@angular/core';
import { IShowinfo } from '../interfaces/ishowinfo';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from 'src/app/show-info-service/tvshow.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  show: IShowinfo;
  show_id: number;

  constructor(private tvshowService: TvshowService,private actRoute: ActivatedRoute) {
     //added by Priya for getting query params showid dynamically
    this.show_id = this.actRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.tvshowService.getShowInfo(this.show_id)
    .subscribe(data => this.show = data)
  }

}
