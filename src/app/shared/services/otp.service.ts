import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.local';
import { APIURLS } from '../constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(public http: HttpClient) { }

  public validateOtp(email: String, otp: String) {
    return this.http.get(`${environment['MICRO']}${APIURLS['validateOtp']}/${email}/${otp}`);

  }
}
