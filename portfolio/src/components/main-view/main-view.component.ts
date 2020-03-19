import { 
    Component, 
    OnInit,
    OnDestroy, 
    ViewChild, 
    ElementRef, 
    AfterViewInit
} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 's-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {

    theme;
    //title = "</CameronStark>"
    //title = "</CMS>"
    title = "<Cameron></Stark>"

    navActive = false;
    position;
    constructor(
        private dataService : DataService
    ) { 
        //this.theme = 'colorful';
        this.theme = 'light';
    }

    ngAfterViewInit() {
       
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

    frontEndLangs : Array<any>;
    backEndLangs : Array<any>;
    frameworks : Array<any>;
    tools : Array<any>;
    ngOnInit() {
        this.dataService.getFrontEndLanguages.subscribe(
            response => {
                this.frontEndLangs = response;
            }
        )

        this.dataService.getBackEndLanguages.subscribe(
            response => {
                this.backEndLangs = response;
            }
        )

        this.dataService.getFrameworks.subscribe(
            response => {
                this.frameworks = response;
            }
        )

        this.dataService.getTools.subscribe(
            response => {
                this.tools = response;
            }
        )
    }

    ngOnDestroy() {
    }
}
