import { PostitColorEnum } from './../../../models/enums/postit-color.enum';
import { PostitProxy } from './../../../models/proxies/postit.proxy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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

  constructor() {}

  public consoleColor(color: string): void {
    console.log('color', color);
  }
  public printPostit(event: PostitProxy): void {
    console.log('postit', event);
  }

  ngOnInit() {
    console.log('postitiColorEnum', this.postitColorEnum);
  }
}
