import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowEpisodesListComponent } from './episode-info/show-episodes-list.component';
import { EpisodeServiceService } from './services/episode-info-service/episode-service.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowInfoComponent } from './show-info/show-info.component';
import { TvshowService } from 'src/app/services/show-info-service/tvshow.service';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { CastService } from './services/cast/cast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchShowsComponent } from './search-shows/search-shows.component';
import { SearchShowsService } from './services/searchshows-service/search-shows.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainPageComponent } from './main-page/main-page.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ShowInfoComponent,
    CastInfoComponent,
    ShowEpisodesListComponent,
    SearchShowsComponent,
    HeaderComponent,
    MenuComponent,
    PageNotFoundComponent,
    MainPageComponent,
    StaticPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  providers: [
    CastService,
    TvshowService,
    EpisodeServiceService,
    SearchShowsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
