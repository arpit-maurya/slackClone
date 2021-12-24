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
    this.updateChat();
  }
  storeChatText(e: any) {
    this.db.database
      .ref(this.dataService.selectedChannel + '/')
      .push()
      .set({
        message: e.target.value,
        user: this.userGamilName,
        firstLetter: this.userFirstLetter,
      });
    this.updateChat();
    this.genrateUserName();
  }

  updateChat() {
    this.newDataArr = this.dataService.createTextBox();
  }

  genrateUserName() {
    this.af.authState.subscribe((authState) => {
      console.log(authState?.email?.charAt(0));
    });
  }
  
  createDMChannel(name: any) {
    let newUserName = this.userGamilName
    newUserName = newUserName.split('.')[0];
    let clickedUserName = name.split('.')[0]
    let setDmSection = String(`privateChat/${newUserName}/${clickedUserName}`);
    this.db.database.ref(setDmSection).push().set({
      message: 'Private Chat',
    }).then(() => {
      this.dataService.getCreatedDm();
    })

    
    setDmSection = String(`privateChat/${clickedUserName}/${newUserName}`);
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
