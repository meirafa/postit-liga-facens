import { LogoModule } from 'src/app/components/logo/logo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HalfCircleSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HalfCircleSpinnerModule,
    LogoModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
