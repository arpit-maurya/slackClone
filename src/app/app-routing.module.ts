import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardSlackComponent } from './dash-board-slack/dash-board-slack.component';
import { LoginComponent } from './login/login.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignInPageComponent },
  { path: 'dashBoard', component: DashBoardSlackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
