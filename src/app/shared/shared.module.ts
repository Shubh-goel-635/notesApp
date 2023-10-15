import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OtpComponent } from './components/otp/otp.component'
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../pages/login/login.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

const modules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatSlideToggleModule,
  CommonModule,
  RouterModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules,],
  declarations: [
    CardComponent
  ]
})
export class SharedModule { }
