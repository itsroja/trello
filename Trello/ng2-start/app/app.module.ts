import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

//Import the component, Use the class name in the curly braces
import { ExampleComponent } from './components/example.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { GraphsComponent } from './components/graphs/graphs.component';

@NgModule({
    imports: [ BrowserModule, ChartsModule ],
    declarations: [ AppComponent, HamburgerComponent, GraphsComponent ],        //Add the component to the declarations
    bootstrap: [ AppComponent ]
})
export class AppModule {}
