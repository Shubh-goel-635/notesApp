import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-rejister',
  templateUrl: './rejister.component.html',
  styleUrls: ['./rejister.component.scss']
})
export class RejisterComponent implements OnInit {
  @HostBinding('class') className = '';
  rejisterForm: FormGroup;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.className = 'theme-light';
    this.rejisterForm = new FormGroup({
      fname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      lname: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });

    document.querySelectorAll('mat-form-field').forEach( field => {
      field['hideRequiredMarker'] = true;
    })
  }

  onSubmit(): void {
    this.userService.rejisterUser(
      this.rejisterForm.controls['fname'].value,
      this.rejisterForm.controls['lname'].value,
      this.rejisterForm.controls['email'].value,
      this.rejisterForm.controls['password'].value).subscribe((res) => {
        console.log(res);
        if (res.payload.code === 200) {
          this.router.navigate(['/signup/otp', res.payload.email]);
        } else {
          console.log(res.error);
        }
      });
  }

}
