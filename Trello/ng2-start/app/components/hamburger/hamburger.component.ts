import { Component } from '@angular/core';

@Component({
    selector: 'hamburger',
    templateUrl: '/app/components/hamburger/hamburger.component.html',
    styleUrls: ['app/components/hamburger//hamburger.component.css']
})

export class HamburgerComponent{
    visible: boolean = false;
    buttonClasses: string = 'container';

    hamburgerClick(){
        this.visible = !this.visible;
        if(this.visible)
            this.buttonClasses += ' change';
        else
            this.buttonClasses = 'container';
    }

}
