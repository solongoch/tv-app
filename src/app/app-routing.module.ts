import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowInfoComponent } from './show-info/show-info.component';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { ShowEpisodesListComponent } from './episode-info/show-episodes-list.component';
import { MenuComponent } from './menu/menu.component';
import { SearchShowsComponent } from './search-shows/search-shows.component';


const routes: Routes = [
  { path: '', component: SearchShowsComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'show-info/:id', component: ShowInfoComponent },
  { path: 'episode-info/:id', component: ShowEpisodesListComponent },
  { path: 'cast-info/:id', component: CastInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
