import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ExploreComponent } from './explore/explore.component';
import { HttpClientModule } from '@angular/common/http';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { WorksComponent } from './works/works.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ExploreComponent,
    LatestNewsComponent,
    ContactComponent,
    DetailsComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
