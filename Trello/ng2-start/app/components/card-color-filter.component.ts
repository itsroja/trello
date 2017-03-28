import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'card-color-filter',
    template: `
        <button (click)="getData()">Get</button>
        <br><br>

        <button (click)="redClicked()" class="smallButton red"></button>
        <button (click)="yellowClicked()" class="smallButton yellow"></button>
        <button (click)="greenClicked()" class="smallButton green"></button>
        <button (click)="allClicked()" class="smallButton"></button>
        <br><br>

        <div id="menu">
            <ul><li *ngFor="let list of listsToShow">
                <div class="box blue">{{ list.name }}</div>
            </li></ul>
        </div>
    `,
    providers: [HttpService]
})

export class CardColorFilterComponent {
    lists = [];
    listsToShow = this.lists;

    constructor(public httpService: HttpService){}

    getData(){
        this.httpService.fetchLists().subscribe(data => this.lists = data);
        for(let l of this.lists){
            l.color = "red";
        }
    }

    redClicked(){
        this.listsToShow = [];
        for(let c of this.lists) {
            if (c.color == "red")
                this.listsToShow.push(c);
        }
    }

    greenClicked(){
        this.listsToShow = [];
        for(let c of this.lists)
        {
            if(c.color == "green")
                this.listsToShow.push(c);
        }
    }

    yellowClicked(){
        this.listsToShow = [];
        for(let c of this.lists)
        {
            if(c.color == "yellow")
                this.listsToShow.push(c);
        }
    }

    allClicked(){
        this.listsToShow = this.lists;
    }
}
