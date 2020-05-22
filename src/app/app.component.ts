import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit{
  title = 'tv-show-app';

  showVar: boolean = true;



  constructor() { }



  ngOnInit(): void {}

  toggleChild(){
    this.showVar = !this.showVar;
    console.log('showVar:', this.showVar)

}

}
