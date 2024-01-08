import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate  {

  constructor(private cookie: CookieService,private router: Router) { }

  canActivate(): boolean {
    if (this.isAuthenticated() == "" || this.isAuthenticated() == undefined) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }


  isAuthenticated(): any {
    const token = this.cookie.get('Auth-Token')
    
    // Check whether the token is expired and return
    // true or false
    return token;
  }
}
