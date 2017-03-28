import { Component } from '@angular/core';

@Component({
    selector: 'hamburger',
    template:`
        <div id="sidebar">

        <ul>
            <li *ngFor="let item of pages"><a href="{{item.pageLink}}">{{item.pageName}}</a></li>
        </ul>


        <div id="sidebar-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>

        </div>
    `
})
export class HamburgerComponent
{
    pages: Page[] = [
        {pageName:'Main Page', pageLink:'index.html'},
        {pageName:'Team Members', pageLink:'TeamMembers.html'},
        {pageName:'Graphs and Data', pageLink:'GraphsAndData.html'},
        {pageName:'Completed Board', pageLink:'CompletedBoard.html'},
    ];


}

interface Page{
    pageName: string;
    pageLink: string;
}