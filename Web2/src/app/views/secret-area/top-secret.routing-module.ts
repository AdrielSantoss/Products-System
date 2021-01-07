import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/authentication/auth.guard';
import { Shell } from 'src/app/shell/shell.service';

import { IndexComponent } from './index/index.component';


const routes: Routes = [
Shell.childRoutes([
    { path: 'topsecret', component: IndexComponent, canActivate: [AuthGuard] }       
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TopSecretRoutingModule { }
