import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   show_id : number;

  constructor(private actRoute: ActivatedRoute) {
    this.show_id = this.actRoute.snapshot.params.id;
 
   }

  ngOnInit(): void {
  }

}
