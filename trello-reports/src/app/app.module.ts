import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { BroadcastService } from './services/broadcast.service';
import { TrelloService } from './services/trello.service';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { BoardComponent } from './board/board.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CardlistComponent,
    BoardComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
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
