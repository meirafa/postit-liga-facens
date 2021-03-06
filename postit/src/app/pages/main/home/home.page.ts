import { PostitColorEnum } from './../../../models/enums/postit-color.enum';
import { PostitProxy } from './../../../models/proxies/postit.proxy';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public postitArray: PostitProxy[] = [
    {
      id: 0,
      title: 'Título da Nota',
      annotation:
        'Repudiandae, repellendus porro reprehenderit dolores voluptate numquam libero fuga.',
      color: PostitColorEnum.GREEN,
    },
    {
      id: 1,
      title: 'Título da Nota',
      annotation:
        'Repudiandae, repellendus porro reprehenderit dolores voluptate numquam libero fuga.',
      color: PostitColorEnum.YELLOW,
    },
    {
      id: 2,
      title: 'Título da Nota',
      annotation:
        'Repudiandae, repellendus porro reprehenderit dolores voluptate numquam libero fuga.',
      color: PostitColorEnum.BLUE,
    },
    {
      id: 3,
      title: 'Título da Nota',
      annotation:
        'Repudiandae, repellendus porro reprehenderit dolores voluptate numquam libero fuga.',
      color: PostitColorEnum.PURPLE,
    },
    {
      id: 4,
      title: 'Título da Nota',
      annotation:
        'Repudiandae, repellendus porro reprehenderit dolores voluptate numquam libero fuga.',
      color: PostitColorEnum.ORANGE,
    },
    {
      id: 5,
      title: 'Título da Nota',
      annotation:
        'Repudiandae, repellendus porro reprehenderit dolores voluptate numquam libero fuga.',
      color: PostitColorEnum.ROSE,
    },
  ];

  public postitColorEnum: typeof PostitColorEnum = PostitColorEnum;

  constructor(public modalController: ModalController) {}

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
          post => post.id !== data.postit.id
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
