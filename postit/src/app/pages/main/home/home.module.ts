import { LogoModule } from './../../../components/logo/logo.module';
import { PostitModule } from './../../../components/postit/postit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LogoModule,
    PostitModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
