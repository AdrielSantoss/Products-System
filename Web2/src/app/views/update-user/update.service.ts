import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root'
})

export class UpdateService extends BaseService {

  constructor(private http: HttpClient) {    
    super();      
  }
  fetchTopSecretData(token: string, id: string) {   
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    return this.http.get(`https://localhost:6001/identity/user/${id}`, httpOptions).pipe(catchError(this.handleError));
  }

}
