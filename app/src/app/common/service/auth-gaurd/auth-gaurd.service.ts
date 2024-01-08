import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStroageService } from '../localstorage/local-stroage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(
    private router: Router,
    private localStorage: LocalStroageService,
  ) { }


  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = await this.getItem('authToken')
    const viewedTutorial = await this.getItem('viewedTutorial')

    if (currentUser) {
      return true;
    }
    else  {
      this.router.navigateByUrl('/login');
      return false;
    }
    // else {
    //   this.router.navigateByUrl('/onboarding');
    //   return false;
    // }
  }


  getItem(key): Promise<boolean> {
    return new Promise((fulfill, neglect) => {
      this.localStorage.getStoredKey(key)
        .then((val) => {
          if (val)
            fulfill(true);
          else
            fulfill(false)
        }).catch(err => {
          fulfill(false);
        })
    })
  }

}
