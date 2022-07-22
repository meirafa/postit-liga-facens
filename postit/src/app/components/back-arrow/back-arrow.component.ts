import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss'],
})
export class BackArrowComponent {
  @Input()
  public src: string;

  constructor() {}
}
