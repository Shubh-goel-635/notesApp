import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IUserInfo } from '../models/user.model';
import { APIURLS } from '../constants/api-url';
import { environment } from 'src/environments/environment.local';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: IUserInfo;

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    const payload = {
      email,
      password
    };
    return this.http.post<any>(`${environment['MICRO']}${APIURLS.login}`, payload);
  }

  public rejisterUser(fname: string, lname: string, email: string, password: string) {
    const payload = {
      fname,
      lname,
      email,
      password,
      language_preference: 'en'
    }
    
    return this.http.post<any>(`${environment['MICRO']}${APIURLS.rejisterUser}`, payload);
  }

  public forgotPassword(email: String, password: String) {
    const payload = {
      email,
      password
    }
    this.http.put(`${environment['MICRO']}${APIURLS.forgotPassword}`, payload).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  public changeLanguage(language_preference: String) {
    const payload = {
      email: this.user?.email,
      language_preference
    }
    return this.http.put(`${environment['MICRO']}${APIURLS.changeLanguage}`, payload);
  }
}
