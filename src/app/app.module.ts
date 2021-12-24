import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AppRoutingModule,  } from './app-routing.module';
import { HeaderSlackComponent } from './header-slack/header-slack.component';
import { RouterModule } from '@angular/router';
import { DashBoardSlackComponent } from './dash-board-slack/dash-board-slack.component';
import { SideBarSlackComponent } from './side-bar-slack/side-bar-slack.component';
import { ContentGridComponent } from './content-grid/content-grid.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalNewChannelComponent } from './modal-new-channel/modal-new-channel.component'; 
import { DataServiceService } from './data-service.service';
import { PickerModule } from '@ctrl/ngx-emoji-mart';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    HeaderSlackComponent,
    DashBoardSlackComponent,
    SideBarSlackComponent,
    ContentGridComponent,
    LoginComponent,
    ModalNewChannelComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    PickerModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      'angular-auth-firebase'
    ),
    AngularFirestoreModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
  
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public dataService: DataServiceService) {}
}

