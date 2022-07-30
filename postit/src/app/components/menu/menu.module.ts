import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, IonicModule, LogoModule],
  exports: [MenuComponent],
})
export class MenuModule {}
