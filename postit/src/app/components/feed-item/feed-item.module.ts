import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FeedItemComponent } from './feed-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FeedItemComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [FeedItemComponent],
})
export class FeedItemModule {}
