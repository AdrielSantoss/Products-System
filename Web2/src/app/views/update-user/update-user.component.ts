import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  data = null; 

  constructor(private router: Router, private activateRoute: ActivatedRoute, private authService: AuthService, private updateService: UpdateService) { }

  ngOnInit() {   
      let id =  this.activateRoute.snapshot.paramMap.get("id"); 

      if(this.authService.isAuthenticated()){
        this.updateService.fetchTopSecretData(this.authService.authorizationHeaderValue, id).subscribe(
          result => {         
            this.data = result;
         })
      }else {
        this.router.navigate(["/"])
      }
  }

  updateUser(){
    alert("oi");
  }

}
