import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginsRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginsRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
