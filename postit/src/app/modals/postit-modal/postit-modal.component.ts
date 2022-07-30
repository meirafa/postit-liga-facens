import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItPayload } from 'src/app/models/payload/postit.payload';

@Component({
  selector: 'app-postit-modal',
  templateUrl: './postit-modal.component.html',
  styleUrls: ['./postit-modal.component.scss'],
})
export class PostitModalComponent implements OnInit {
  @Input()
  public color: PostitColorEnum;

  @Input()
  public create: boolean;

  @Input()
  public postit: PostItPayload = {
    id: Math.floor(Math.random() * 100),
    title: '',
    annotation: '',
    color: PostitColorEnum.BLUE,
  };

  constructor(public readonly modalController: ModalController) {}

  ngOnInit() {
    if (!this.color) {
      this.color = this.postit.color;
    }
  }

  public savePostit(): void {
    this.postit.color = this.color;

    this.modalController.dismiss({ postit: this.postit });
  }

  public deletePostit(): void {
    this.modalController.dismiss({ postit: this.postit, isDeleted: true });
  }

  public closeModal(): void {
    this.modalController.dismiss({ isDeleted: false });
  }
}
