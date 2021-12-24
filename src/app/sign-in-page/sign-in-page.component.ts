import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent implements OnInit {
  userData: any;
  email: string = '';
  password: string = '';
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    public dataService: DataServiceService
  ) {
    this.userData = angularFireAuth.authState;
  }

  SignIn() {
    this.angularFireAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.angularFireAuth.onAuthStateChanged((user) => {
          if (user?.email) {
            let userData =(user.email).split('.')[0]
            localStorage.setItem('user', userData);
            this.router.navigate(['/dashBoard']);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {}

  gmailInputvalue(event: any) {
    this.email = event.target.value;
  }
  gmailPasswordvalue(event: any) {
    this.password = event.target.value;
  }
}
