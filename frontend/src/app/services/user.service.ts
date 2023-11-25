import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../models/user";
import {IUserLogin} from "../shared/interfaces/IUserLogin";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { USER_LOGIN_URL, USER_LOGOUT_URL } from "../shared/constants/urls";
import { ToastrService } from "ngx-toastr";
const USER_KEY = 'auth-user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials:true
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject =
    new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;


  constructor(private http: HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Online Veterinary Cabinet ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  public isAuth(): User {
    return this.currentUser;
  }
  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
