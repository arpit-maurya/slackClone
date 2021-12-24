import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public AngularFireAuth: AngularFireAuth) {}

  ngOnInit(): void { }
  emailValue: any;

  getLoginData(e:any) {
    this.emailValue = e.target.value;
  }
 
}
