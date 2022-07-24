import { Component, OnInit } from '@angular/core';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
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


  constructor() { }

  ngOnInit() {
  }

}
