import { Component, ElementRef, HostBinding, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OtpService } from '../../services/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  @HostBinding('class') classname = '';
  otpForm: FormGroup;
  email: String;
  isError: boolean;
  error: any;
  otpControlNames: string[] = ['otp1', 'otp2', 'otp3', 'otp4', 'otp5', 'otp6'];
  @ViewChild('otpInput1') otpInput1: ElementRef<HTMLInputElement>;
  @ViewChild('otpInput2') otpInput2: ElementRef<HTMLInputElement>;
  @ViewChild('otpInput3') otpInput3: ElementRef<HTMLInputElement>;
  @ViewChild('otpInput4') otpInput4: ElementRef<HTMLInputElement>;
  @ViewChild('otpInput5') otpInput5: ElementRef<HTMLInputElement>;
  @ViewChild('otpInput6') otpInput6: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private otpService: OtpService) { }

  ngOnInit(): void {
    this.classname = 'theme-dark';
    this.activatedRoute.params.subscribe(s => {
      this.email = s['email'];
    });

    this.otpForm = new FormGroup({
        digit1: new FormControl(null),
        digit2: new FormControl(null),
        digit3: new FormControl(null),
        digit4: new FormControl(null),
        digit5: new FormControl(null),
        digit6: new FormControl(null)
      });

    console.log(this.otpForm);
  }

  onInput(event: Event, nextInput: HTMLInputElement | null, prevInput: HTMLInputElement | null) {
    let inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.length > 1) {
      inputValue = inputValue.slice(0, 1);
    }
    if (inputValue.length === 1 && nextInput != null) {
      nextInput.focus();
    }
  
    if (inputValue.length === 0 && prevInput != null) {
      prevInput.focus();
    }
  }

  onSubmit() {
    const digit1 = this.otpForm.get('digit1').value;
    const digit2 = this.otpForm.get('digit2').value;
    const digit3 = this.otpForm.get('digit3').value;
    const digit4 = this.otpForm.get('digit4').value;
    const digit5 = this.otpForm.get('digit5').value;
    const digit6 = this.otpForm.get('digit6').value;

    const otp = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
    console.log('OTP Submitted:', otp);

    this.otpService.validateOtp(this.email, otp).subscribe((res) => {
      console.log(res);
    }, (err) => {
      if (err.error.code === 410) {
        this.isError = true;
        this.error = err.error.error;
      }
    })
  }

  @HostListener('input', ['$event.target'])
  onInputNumber(input: HTMLInputElement): void {
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
  }

}
