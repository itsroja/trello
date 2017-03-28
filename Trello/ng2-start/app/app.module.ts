import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardColorFilterComponent } from './components/card-color-filter.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, CardColorFilterComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
