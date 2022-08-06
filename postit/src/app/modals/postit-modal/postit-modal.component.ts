import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItPayload } from 'src/app/models/payload/postit.payload';
import { HelperService } from 'src/app/services/helper.service';
import { NoteService } from 'src/app/services/note.service';

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
    isPublic: false,
  };

  public isLoading: boolean;

  constructor(
    public readonly modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService
  ) {}

  ngOnInit() {
    if (!this.color) {
      this.color = this.postit.color;
    }
  }

  public async savePostit(): Promise<void> {
    this.postit.color = this.color;
    this.isLoading = true;

    const [postit, message] = this.postit.id
      ? await this.note.update(this.postit)
      : await this.note.create(this.postit);

    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.modalController.dismiss({ postit });
  }

  public async deletePostit(): Promise<void> {
    this.isLoading = true;
    const [_, message] = await this.note.delete(this.postit.id);
    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.modalController.dismiss({ postit: this.postit, isDeleted: true });
  }

  public async publishPostit(): Promise<void> {
    this.isLoading = true;
    const [_, message] = await this.note.publish(this.postit);
    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.postit.isPublic = true;

    this.modalController.dismiss({ postit: this.postit });
  }

  public closeModal(): void {
    this.modalController.dismiss({ isDeleted: false });
  }
}
