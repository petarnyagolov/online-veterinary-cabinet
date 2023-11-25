import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from "./services/user.service";

class UserToken {}
class Permissions {
  canActivate(): boolean{
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private userService:UserService, private router:Router) {
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userService.currentUser.token) return true;

    this.router.navigate(['/login'])
    return false;
  }
}
