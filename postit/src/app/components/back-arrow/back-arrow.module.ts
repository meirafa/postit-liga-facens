import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackArrowComponent } from 'src/app/components/back-arrow/back-arrow.component';

@NgModule({
  declarations: [BackArrowComponent],
  imports: [CommonModule, IonicModule],
  exports: [BackArrowComponent],
})
export class BackArrowModule {}
