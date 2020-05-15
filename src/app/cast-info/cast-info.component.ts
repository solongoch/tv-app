import { Component, OnInit } from '@angular/core';
import { ICastInfo } from '../icast-info';
import { CastService } from '../cast/cast.service';

@Component({
  selector: 'app-cast-info',
  templateUrl: './cast-info.component.html',
  styleUrls: ['./cast-info.component.css']
})
export class CastInfoComponent implements OnInit {
  listOfCast: ICastInfo[];

  constructor(private castService: CastService) {}

  ngOnInit(): void {
    this.castService.getCast(431).subscribe(listOfCast => {
      this.listOfCast = listOfCast;
    });
  }
}
