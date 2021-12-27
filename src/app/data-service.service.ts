import { Injectable,OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService implements OnInit {
  
  constructor(public db: AngularFireDatabase, public af: AngularFireAuth) {}
  selectedChannel: any;
  chatDataBox: any;
  
  selectedDm: any;
  ngOnInit(): void {
    this.db.database.ref('channel/').on('value', (snapshotChanges) => {
      const newData = snapshotChanges.val();
      let items: any = [];
      Object.keys(newData).map((key, i) => {
        if (i == 0) {
          this.selectedChannel = newData[key].channel;
        }
      });
    });
    this.getCreatedDm()
  }

  createTextBox(): any {
    this.db.database
      .ref(this.selectedChannel + '/')
      .on('value', (snapshotChanges) => {
        let newDataArr: any = [];
        const newData = snapshotChanges.val();
        Object.keys(newData).map((key) => {
          let items = [];
          items.push(newData[key].user);
          items.push(newData[key].message);
          items.push(newData[key].firstLetter);
          newDataArr.push(items);
          console.log(newDataArr);
          
        });
        this.chatDataBox = newDataArr
      });
  }
  createDmTextBox(): any {
    this.db.database
      .ref('privateChat' + this.selectedDm + '/')
      .on('value', (snapshotChanges) => {
        let newDataArr: any = [];
        const newData = snapshotChanges.val();
        Object.keys(newData).map((key) => {
          let items = [];
          items.push(newData[key].user);
          items.push(newData[key].message);
          items.push(newData[key].firstLetter);
          newDataArr.push(items);
          console.log(newDataArr);
        });
        this.chatDataBox = newDataArr;
      });
  }
  dmChannelArr: any;
  userName: any =localStorage.getItem('user')
   newDataArr:any;
  getCreatedDm() {
    if (!this.userName) {
        this.af.authState.subscribe((authState) => {
          let userName: any = authState?.email;
          this.userName = userName.split('.')[0];
        });
    }
      this.newDataArr = [];
    this.db.database
      .ref('privateChat/' + `${this.userName}` + '/')
      .on('value', (snapshotChanges) => {
        
        const newData = snapshotChanges.val();
        let items: any = [];
        Object.keys(newData).map((key) => {
          if (key == this.userName) {
          } else {
            items.push(key);
          }
        });
        this.newDataArr = items;
        this.dmChannelArr = this.newDataArr;
        
      });
    
    }
    
    
    
}
