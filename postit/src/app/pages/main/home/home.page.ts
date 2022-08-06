import { PostitColorEnum } from './../../../models/enums/postit-color.enum';
import { PostitProxy } from './../../../models/proxies/postit.proxy';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public postitArray: PostitProxy[] = [];

  public postitColorEnum: typeof PostitColorEnum = PostitColorEnum;

  public isLoading: boolean;

  constructor(
    public modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService
  ) {}

  public async ionViewDidEnter(): Promise<void> {
    await this.loadMyNotes();
  }

  public async loadMyNotes(): Promise<void> {
    this.isLoading = true;
    const [notes, errorMessage] = await this.note.getMyNotes();
    this.isLoading = false;

    if (errorMessage) {
      return this.helper.showToast(errorMessage, 5_000);
    }

    this.postitArray = notes;
  }

  public async openPostModal(postit: PostitProxy): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        postit,
      },
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      console.log(data);
      if (data.isDeleted) {
        this.postitArray = this.postitArray.filter(
          (post) => post.id !== data.postit.id
        );
      }
    });
  }

  public async openNewPostModal(color: PostitColorEnum): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        color,
        create: true,
      },
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      if (data.postit) {
        this.postitArray.push(data.postit);
      }
    });
  }

  public printPostit(event: PostitProxy): void {
    console.log('postit', event);
  }
}
