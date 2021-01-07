import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        return 'https://localhost:5001/';
    }    
     
    get resourceApiURI() {
        return 'https://localhost:6001/';
    }  
}