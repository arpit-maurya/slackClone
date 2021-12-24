import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalNewChannelComponent } from '../modal-new-channel/modal-new-channel.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-side-bar-slack',
  templateUrl: './side-bar-slack.component.html',
  styleUrls: ['./side-bar-slack.component.css'],
})
export class SideBarSlackComponent implements OnInit {
  timestamp = Date.now();
  dmList: any;
  newDataArr: any;
  constructor(
    public db: AngularFireDatabase,
    public dialog: MatDialog,
    public dataService: DataServiceService,
    public af: AngularFireAuth
  ) {
    this.getCreatedChannel();
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalNewChannelComponent, {
      height: '200px',
      width: '350px',
    });
  }
  ngOnInit(): void {
    this.dataService.getCreatedDm();
  }
  val: number = 0;
  
  getCreatedChannel() {
    this.db.database.ref('channel/').on('value', (snapshotChanges) => {
      const newData = snapshotChanges.val();
      let items: any = [];
      Object.keys(newData).map((key) => {
        items.push(newData[key].channel);
      });
      this.newDataArr = items;
    });
  }
  updateChannelname(element: any) {
    this.dataService.selectedChannel = element.target.innerHTML;
    this.dataService.createTextBox();
  }

}
