  import { 
    Injectable
} from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import 'firebase/firestore';

export interface TechStackTile {
    label: string;
    icon: string;
}
@Injectable()
export class HomeViewService {

    private home : AngularFirestoreDocument;

    constructor (
        private db : AngularFirestore
    ) {
        this.home = db.collection('database').doc('home');
    }

    get getWebDev() { 
        return this.home.collection<TechStackTile>('web').valueChanges();
    }

    get getMobileDev() {
        return this.home.collection<TechStackTile>('mobile').valueChanges();
    }

    get getDesign() {
        return this.home.collection<TechStackTile>('design').valueChanges();
    }

}