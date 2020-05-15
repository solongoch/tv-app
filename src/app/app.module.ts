import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowEpisodesListComponent } from './show-episodes-list/show-episodes-list.component';
import { EpisodeServiceService } from './episode-service/episode-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from  '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ShowEpisodesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [EpisodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
