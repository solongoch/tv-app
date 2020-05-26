import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowEpisodesListComponent } from './episode-info/show-episodes-list.component';
import { EpisodeServiceService } from './episode-service/episode-service.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowInfoComponent } from './show-info/show-info.component';
import { TvshowService } from 'src/app/show-info-service/tvshow.service';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { CastService } from './cast/cast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import  {MatButtonModule} from '@angular/material/button'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchShowsComponent } from './search-shows/search-shows.component';
import { SearchShowsService } from './searchshows-service/search-shows.service';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderNosearchComponent } from './header-nosearch/header-nosearch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowInfoComponent,
    CastInfoComponent,
    ShowEpisodesListComponent,
    SearchShowsComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MenuComponent,
    PageNotFoundComponent,
    HeaderNosearchComponent
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
    SlickCarouselModule
  ],
  providers: [CastService, TvshowService,EpisodeServiceService,SearchShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
