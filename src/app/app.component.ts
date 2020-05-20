import { Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit{
  title = 'tv-show-app';
  searchField = new FormControl('');


  constructor() { }



  ngOnInit(): void {}

  clearSearchField() {
    this.searchField.setValue('');
  }
}
