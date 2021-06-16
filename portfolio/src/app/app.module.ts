import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth'; 
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


//#region ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import {MatGridListModule} from '@angular/material/grid-list';
//#endregion

//#region COMPONENTS
import { HomeViewComponent } from './../components/home-view/home-view.component';
import { MainViewComponent } from './../components/main-view/main-view.component';
//#endregion

//#region SERVICES
import { HomeViewService } from './../components/home-view/home-view.service';
//#endregion

@NgModule({
  declarations: [
    MainViewComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [
    HomeViewService
  ],
  bootstrap: [
    MainViewComponent,
    HomeViewComponent
  ]
})
export class AppModule { }
