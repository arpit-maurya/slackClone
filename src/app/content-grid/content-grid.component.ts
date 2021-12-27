import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-content-grid',
  templateUrl: './content-grid.component.html',
  styleUrls: ['./content-grid.component.css'],
})
export class ContentGridComponent implements OnInit {
  constructor(
    public db: AngularFireDatabase,
    public af: AngularFireAuth,
    public dataService: DataServiceService
  ) {}
  userFirstLetter: any;
  userGamilName: any;
  newDataArr: any = [];
  @Input() chatContainer: any;
  ngOnInit(): void {
    this.af.authState.subscribe((authState) => {
      this.userFirstLetter = authState?.email?.charAt(0);
      this.userGamilName = authState?.email;
    });
  }
  storeChatText(e: any) {
    if (this.dataService.selectedDm.search('@')) {
    } else {
      
    }

    this.db.database
      .ref(this.dataService.selectedChannel + '/')
      .push()
      .set({
        message: e.target.value,
        user: this.userGamilName,
        firstLetter: this.userFirstLetter,
        channel: this.dataService.selectedChannel,
      });
  }

  dmSection_1: any;

  createDMChannel(name: any): void {
    let newUserName = this.userGamilName;
    newUserName = newUserName.split('.')[0];
    let clickedUserName = name.split('.')[0];

    let setDmSection = String(`privateChat/${newUserName}/${clickedUserName}`);
this.dmSection_1 =setDmSection
    let checkReturnValue_1: boolean = false;
    this.db.database.ref(setDmSection).on('value', (snapshotChanges) => {
      const newData = snapshotChanges.val();
      let items: any = [];
      Object.keys(newData).map((key, i) => {
        if (i == 0) {
          if (newData[key].message == 'Private Chat') {
            checkReturnValue_1 = true;
          }
        }
      });
    });

    if (!checkReturnValue_1) {
      this.db.database
      .ref(setDmSection)
      .push()
      .set({
        message: 'Private Chat',
      })
      .then(() => {
        this.dataService.getCreatedDm();
      });
    }

    setDmSection = String(`privateChat/${clickedUserName}/${newUserName}`);


     let checkReturnValue_2: boolean = false;
     this.db.database.ref(setDmSection).on('value', (snapshotChanges) => {
       const newData = snapshotChanges.val();
       let items: any = [];
       Object.keys(newData).map((key, i) => {
         if (i == 0) {
           if (newData[key].message == 'Private Chat') {
             checkReturnValue_2 = true;
           }
         }
       });
     });

    if (!checkReturnValue_2) {
       this.db.database
         .ref(setDmSection)
         .push()
         .set({
           message: 'Private Chat',
         })
         .then(() => {
           this.dataService.getCreatedDm();
         });
    }


  }

  checkUserHasCreatedOrNot() {}
}
