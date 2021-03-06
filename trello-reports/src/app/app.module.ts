import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

import { BroadcastService } from './services/broadcast.service';
import { TrelloService } from './services/trello.service';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { BoardComponent } from './board/board.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { GraphsComponent } from './graphs/graphs.component';
import {TeamComponent} from './team/team.component';
import { HomeComponent } from './home/home.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CardlistComponent,
    BoardComponent,
    HamburgerComponent,
    GraphsComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,
    HttpService,
    TrelloService,
    BroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
