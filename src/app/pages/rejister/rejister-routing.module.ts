import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejisterComponent } from './rejister.component';

const routes: Routes = [
  { path: '', component: RejisterComponent },
  { 
    path: 'otp/:email',
    loadChildren: () => import('../../shared/components/otp/otp.module').then(m => m.OtpModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejisterRoutingModule { }
