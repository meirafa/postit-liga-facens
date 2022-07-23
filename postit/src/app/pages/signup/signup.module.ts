import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { BackArrowModule } from 'src/app/components/back-arrow/back-arrow.module';
import { LogoModule } from 'src/app/components/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    LogoModule,
    BackArrowModule
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
