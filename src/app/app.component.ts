import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Chatitem from './Chatitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textMessage = ""
  private itemsCollection: AngularFirestoreCollection<Chatitem>;

  constructor(private afs: AngularFirestore){
    this.itemsCollection = afs.collection<Chatitem>('lobby');
  }

  doIt(){
    console.log(this.textMessage)
    //send to firestore
    this.itemsCollection.add({
      sender: "Tinn",
      message: this.textMessage
    })
    this.textMessage = ""
  }
}
