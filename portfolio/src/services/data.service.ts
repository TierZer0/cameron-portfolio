import { 
    Injectable
} from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable()
export class DataService {

    private home : AngularFirestoreDocument;

    constructor (
        private db : AngularFirestore
    ) {
        this.home = db.collection('data').doc('home');
    }

    get getFrontEndLanguages() {
        return this.home.collection('frontend').valueChanges();
    }

    get getBackEndLanguages() {
        return this.home.collection('backend').valueChanges();
    }

    get getFrameworks() {
        return this.home.collection('frameworks').valueChanges();
    }

    get getTools() {
        return this.home.collection('tools').valueChanges();
    }
}