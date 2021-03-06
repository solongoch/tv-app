import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tv-app';

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.navigate(['/mainpage']);
    // this._router.navigate(['/index']);
  }
}
