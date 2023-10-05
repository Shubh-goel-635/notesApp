import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejisterRoutingModule } from './rejister-routing.module';
import { RejisterComponent } from './rejister.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OtpComponent } from 'src/app/shared/components/otp/otp.component';


@NgModule({
  declarations: [
    RejisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RejisterRoutingModule
  ],
  exports: [
    RejisterComponent
  ]
})
export class RejisterModule { }
