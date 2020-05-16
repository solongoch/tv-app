import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEpisodesListComponent } from './show-episodes-list/show-episodes-list.component';
import { EpisodeServiceService } from './episode-service/episode-service.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowInfoComponent } from './show-info/show-info.component';
import { TvshowService } from './tvshow.service';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { CastService } from './cast/cast.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    ShowInfoComponent,
    CastInfoComponent,
     ShowEpisodesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [CastService, TvshowService,EpisodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
