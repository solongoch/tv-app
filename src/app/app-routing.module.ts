import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowInfoComponent } from './show-info/show-info.component';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { ShowEpisodesListComponent } from './episode-info/show-episodes-list.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponentComponent } from './header-component/header-component.component';


const routes: Routes = [


    //empty path should route to HeaderComponent
  { path: 'search', component: HeaderComponentComponent },
   //Given path should route to MenuComponent
  { path: 'menu/:id', component: MenuComponent },
   //Given path should route to ShowInfoComponent
  { path: 'show-info/:id', component: ShowInfoComponent },
   //Given path should route to ShowEpisodesListComponent
  { path: 'episode-info/:id', component: ShowEpisodesListComponent },
   //Given path should route to CastInfoComponent
   { path: 'cast-info/:id', component: CastInfoComponent },
   //Given path should route to PageNotFoundComponent Wildcard route should be at atlast
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
