import { IonicModule } from '@ionic/angular';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, IonicModule],
  exports: [LogoComponent],
})
export class LogoModule {}
