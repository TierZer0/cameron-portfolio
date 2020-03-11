import { 
    Component, 
    OnInit,
    OnDestroy, 
    ViewChild, 
    ElementRef, 
    AfterViewInit
} from '@angular/core';
import {

} from '@fortawesome/free-regular-svg-icons';
import { HostListener } from '@angular/core';

@Component({
    selector: 's-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {

    theme;
    //title = "</CameronStark>"
    title = "</CMS>"
    
    navActive = false;
    position;
    constructor(

    ) { 
        //this.theme = 'colorful';
        this.theme = 'light';
    }

    ngAfterViewInit() {
       
    }



    scrolling = false;
    @ViewChild('element') contentElement : ElementRef;
    // @HostListener('window:scroll', ['$event']) 
    //     handleScroll() {
        
    //         const windowScroll = window.pageYOffset;
    //         console.log(this.position);
    //     }
    scroll() {
        this.position = this.contentElement.nativeElement.offsetTop;
        console.log(this.position, window.pageYOffset);
    }
    

    themes = ['brightness_7', 'brightness_3', 'brightness_5'];
    themeCount = 0;
    //themeCount = 2;
    currentTheme = this.themes[this.themeCount];
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
