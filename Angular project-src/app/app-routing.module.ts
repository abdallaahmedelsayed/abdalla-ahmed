import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  //localhost 4200
  {path :"",component:HomeComponent},
  //localhost 4200/explore
  {path :"explore",component:ExploreComponent},
  //localhost 4200/news
  {path :"news",component:LatestNewsComponent},
  //localhost 4200/contact
  {path :"contact",component:ContactComponent},
  //localhost 4200 work
  {path :"works",component:WorksComponent},
//wildcard component
  {path :"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
