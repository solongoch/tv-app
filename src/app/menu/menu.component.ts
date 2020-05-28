import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show_id: number;
  searchTerm : string;

  constructor(private actRoute: ActivatedRoute, private _router: Router) {
    
    this.show_id = this.actRoute.snapshot.params.id;

  }

  ngOnInit(): void {

  }
  callShowInfo() {
    this._router.navigate(['/show-info', this.show_id] );
  }
  callEpisodeInfo() {
    this._router.navigate(['/episode-info', this.show_id] );
  }
  callCastInfo() {
    this._router.navigate(['/cast-info', this.show_id]);
  }

}
