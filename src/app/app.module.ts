import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowEpisodesListComponent } from './show-episodes-list/show-episodes-list.component';
import { EpisodeServiceService } from './episode-service/episode-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowInfoComponent } from './show-info/show-info.component';
import { TvshowService } from 'src/app/show-info-service/tvshow.service';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { CastService } from './cast/cast.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { FlexLayoutModule } from '@angular/flex-layout';
import { TvsearchComponent } from './tvsearch/tvsearch.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ShowInfoComponent,
    CastInfoComponent,
    ShowEpisodesListComponent,
    TvsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CastService, TvshowService, EpisodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
