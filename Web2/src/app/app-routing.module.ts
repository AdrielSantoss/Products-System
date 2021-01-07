import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthGuard } from './core/authentication/auth.guard';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { IndexComponent } from './views/secret-area/index/index.component';



const routes: Routes = [{
  component: LoginComponent,
  path: ""
}, {
  component: HomeComponent,
  path: "home"
}, {
  component: AuthCallbackComponent,
  path:"auth-callback"
}, {
  component:IndexComponent ,
  path: "topsecret",
  canActivate: [AuthGuard]

}] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
