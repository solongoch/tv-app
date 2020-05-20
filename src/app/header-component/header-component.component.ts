import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  searchField = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  clearSearchField() {
    this.searchField.setValue('');
  }
}
