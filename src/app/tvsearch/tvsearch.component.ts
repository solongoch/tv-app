import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-tvsearch',
  templateUrl: './tvsearch.component.html',
  styleUrls: ['./tvsearch.component.css']
})
export class TvsearchComponent implements OnInit {
  search = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
