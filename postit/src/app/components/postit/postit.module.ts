import { IonicModule } from '@ionic/angular';
import { PostitComponent } from 'src/app/components/postit/postit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PostitComponent],
  imports: [CommonModule, IonicModule],
  exports: [PostitComponent],
})
export class PostitModule {}
