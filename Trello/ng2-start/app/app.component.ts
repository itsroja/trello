import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <hamburger></hamburger>
        </div>
        <div>
        <h1 align="center">Main page with Trello information</h1></div>
        <my-app></my-app>
        
    `
})

export class AppComponent {}
