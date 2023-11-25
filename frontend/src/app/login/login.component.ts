import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InputContainerComponent} from "../input-container/input-container.component";
import { User } from "../models/user";
import { BehaviorSubject } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  loginForm!: FormGroup;
  isSubmitted = false;
  user = new User();
  private userSubject = new BehaviorSubject<User>(this.user);
  login(username: string, password: string) {
    this.username = username;
    this.password = password;

  }

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService.login({ email: this.fc['email'].value, password: this.fc['password'].value }).subscribe(()=>{
      this.router.navigateByUrl('/animals')
    })
  }

}
