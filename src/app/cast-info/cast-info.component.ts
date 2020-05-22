import { Component, OnInit } from '@angular/core';
import { ICastInfo } from '../interfaces/icast-info';
import { CastService } from '../cast/cast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cast-info',
  templateUrl: './cast-info.component.html',
  styleUrls: ['./cast-info.component.css']
})
export class CastInfoComponent implements OnInit {
  listOfCast: ICastInfo[];
  show_id: number;

  constructor(private castService: CastService, private actRoute: ActivatedRoute) {
    //added by Priya for getting query params showid dynamically
    this.show_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.castService.getCast(this.show_id).subscribe(listOfCast => {
      this.listOfCast = listOfCast;
    });
  }
}
