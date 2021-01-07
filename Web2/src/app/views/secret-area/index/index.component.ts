import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from 'src/app/core/authentication/auth.service';


import { TopSecretService } from '../top-secret.service';

@Component({
  selector: 'top-secret-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  claims=null;
  busy: boolean;

  constructor(private authService: AuthService, private topSecretService: TopSecretService) {}

    ngOnInit() {    
      this.busy = true;
      this.topSecretService.fetchTopSecretData(this.authService.authorizationHeaderValue)
      .pipe(finalize(() => {
        this.busy = false;
      })).subscribe(
      result => {         
        this.claims = result;
     });
    }
}
