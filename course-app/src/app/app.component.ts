import { Component, OnInit } from '@angular/core';
import { environment } from '@src/environments/environment';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'course-app';

  // Constructor: Scaffoled AngularFirestore
  constructor(private angularFS: AngularFirestore) {

  }

  ngOnInit() {
    this.angularFS
        .collection('test')
        .snapshotChanges()
        .subscribe( items => {
          console.log(items.map(x => x.payload.doc.data()));
        })


  }
}
