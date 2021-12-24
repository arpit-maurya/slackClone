import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Component({
  selector: 'app-modal-new-channel',
  templateUrl: './modal-new-channel.component.html',
  styleUrls: ['./modal-new-channel.component.css'],
})
export class ModalNewChannelComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public db: AngularFireDatabase,
  ) { }
  
  closeModalNewChannel(inputDiv: any) {
    let newChannelName = inputDiv.value;
    this.db.database.ref('channel/').push().set({
      channel: newChannelName,
    });
    this.dialog.closeAll();
  }
  ngOnInit(): void {}
}
