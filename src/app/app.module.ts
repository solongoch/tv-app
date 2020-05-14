import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSingleSearchComponent } from './show-single-search/show-single-search.component';
import { ShowDataService } from './show-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SeasonsListComponentComponent } from './seasons-list-component/seasons-list-component.component';
import { SeasonsListServiceService } from './seasons-list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowSingleSearchComponent,
    SeasonsListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowDataService,SeasonsListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
