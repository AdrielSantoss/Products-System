import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from "../../shared/base.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {

    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    private manager = new UserManager(getClientSettings());
    private user: User | null;

    constructor(private http: HttpClient) {
        super();

        this.manager.getUser().then(user => {
            this.user = user;
            this._authNavStatusSource.next(this.isAuthenticated());
        });
    }

    login() {
        return this.manager.signinRedirect();
    }

    isAuthenticated(): boolean {
        return this.user != null && !this.user.expired;
    }

    async completeAuthentication() {
        this.user = await this.manager.signinRedirectCallback();
        this._authNavStatusSource.next(this.isAuthenticated());
    }

    get authorizationHeaderValue(): string {
        return `${this.user.token_type} ${this.user.access_token}`;
    }

    get name(): string {
        return this.user != null ? this.user.profile.name : '';
    }

    async signout() {
        await this.manager.signoutRedirect();
    }

}

export function getClientSettings(): UserManagerSettings {
    return {
        authority: "https://localhost:5001",
        client_id: "angular_spa",
        redirect_uri: "http://localhost:4200/auth-callback",
        response_type: "code",
        scope: "openid profile api1",
        post_logout_redirect_uri: "http://localhost:4200/",
    };
}
