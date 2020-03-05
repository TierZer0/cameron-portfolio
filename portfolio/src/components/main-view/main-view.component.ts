import { Component, OnInit, OnDestroy, } from '@angular/core';
import {

} from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 's-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {

    theme;
    //title = "</CameronStark>"
    title = "Cameron Stark"
    currentTheme = 'brightness_7';
    navActive = false;
    constructor(

    ) { 
        this.theme = 'light';
    }

    themes = ['brightness_7', 'brightness_3', 'brightness_5'];
    themeCount = 0;
    changeTheme() {
        this.themeCount++;
        if (this.themeCount <= 2) {
            this.currentTheme = this.themes[this.themeCount];
        } else {
            this.themeCount = 0;
            this.currentTheme = this.themes[this.themeCount];
        }

        if (this.themeCount == 0) {
            this.theme = 'light'
        } else if (this.themeCount == 1) {
            this.theme = 'dark';
        } else if (this.themeCount == 2) {
            this.theme = 'colorful';
        } else {
            this.theme = 'light';
        }
        
    }

    mobileNav() {
        this.navActive = !this.navActive;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
