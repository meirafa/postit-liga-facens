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
    id: 6,
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

  public savePostIt(): void {
    this.postit.color = this.color;

    this.modalController.dismiss(this.postit);
  }
}
