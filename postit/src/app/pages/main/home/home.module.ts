import { LogoModule } from './../../../components/logo/logo.module';
import { PostitModule } from './../../../components/postit/postit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PostItModalModule } from 'src/app/modals/postit-modal/postit-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LogoModule,
    PostitModule,
    PostItModalModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
