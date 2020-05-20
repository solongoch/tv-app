import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowInfoComponent } from './show-info/show-info.component';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { ShowEpisodesListComponent } from './episode-info/show-episodes-list.component';


const routes: Routes = [
  { path: 'show-info', component: ShowInfoComponent },
  { path: 'cast-info', component: CastInfoComponent },
  { path: 'episode-info', component: ShowEpisodesListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
