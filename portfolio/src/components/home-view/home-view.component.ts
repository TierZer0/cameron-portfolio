import { 
    Component, 
    OnInit,
    OnDestroy, 
} from '@angular/core';
import { HomeViewService } from "./home-view.service";

export interface TechStackTile {
    label: string;
    icon: string;
}

@Component({
    selector: 'home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.sass']
})
export class HomeViewComponent implements OnInit, OnDestroy {

    constructor(
        private service: HomeViewService
    ) {

    }

    
    webDevStack : TechStackTile[];
    mobileDevStack : TechStackTile[];
    designStack : TechStackTile[];
    ngOnInit() {

        this.service.getWebDev.subscribe(
            response => {
                this.webDevStack = response;
            }
        )

        this.service.getMobileDev.subscribe(
            response => {
                this.mobileDevStack = response;
            }
        )

        this.service.getDesign.subscribe(
            response => {
                this.designStack = response;
            }
        )

    }

    ngOnDestroy() {

    }
}