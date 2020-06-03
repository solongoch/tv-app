import { Component, OnInit } from '@angular/core';
import { ICastInfo } from '../interfaces/icast-info';
import { CastService } from '../services/cast/cast.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cast-info',
  templateUrl: './cast-info.component.html',
  styleUrls: ['./cast-info.component.css']
})
export class CastInfoComponent implements OnInit {
  listOfCast: ICastInfo[];
  show_id: number;
  isLoading: boolean;

  constructor(
    private castService: CastService,
    private actRoute: ActivatedRoute,
    private _router: Router
  ) {
    //added by Priya for getting query params showid dynamically
    this.show_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.isLoading = true; // show progress bar
    this.castService.getCast(this.show_id).subscribe(
      listOfCast => {
        this.listOfCast = listOfCast;
        this.isLoading = false; // if it's getting data from API request, it won't show progress bar
      },
      error => {
        this._router.navigate(['/error']);
      }
    );
  }
}
