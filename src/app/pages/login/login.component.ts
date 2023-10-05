import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') classname = '';
  loginForm: FormGroup;
  isError: boolean = false;
  error: String;

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.classname = 'theme-light';
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }
  
  getEmailErrorMessage() {
    return this.loginForm.controls['email'].invalid ? 'You must enter a valid email' :'';
  }

  onSubmit() {
    console.log("login Form", this.loginForm);
    this.userService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe(
      res => {
        console.log("request send");
        console.log(res);
        if (res.code === 200) {
          console.log("login succesfull");
        } else if (res.code === 202) {
          this.router.navigate(['/signin/otp', this.loginForm.controls['email'].value]);
        }
      }, err => {
        this.isError = true;
        this.error = err.error.error;
      });
  }
}
