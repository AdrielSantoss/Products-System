import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { IndexComponent } from './views/secret-area/index/index.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';



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
  path: "topsecret"
}, {
  component: UpdateUserComponent,
  path: "updateUser/:id"
}] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
