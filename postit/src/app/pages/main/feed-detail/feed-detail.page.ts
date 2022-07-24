import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {
  public postitArray: PostitProxy[] = [
    {
      id: 0,
      title: 'Título do post0',
      annotation:
        'Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.GREEN,
      comments: [],
    },
    {
      id: 1,
      title: 'Título do post1',
      annotation:
        'uspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.YELLOW,
      comments: [],
    },
    {
      id: 2,
      title: 'Título do post2',
      annotation:
        'Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.BLUE,
      comments: [
        {
          comment: 'Muito legal seu post',
        },
        {
          comment:
            'Ótimas dicas Ana. Você faz o uso de algum app de controle financeiro da sua rotina. Já ouviu falar sobre o Mobills .Esse aplicativo de controle financeiro funciona de uma maneira simples, funcional e intuitiva. Com ele, você consegue organizar todos seus ganhos e gastos divididos por categorias.',
        },
      ],
    },
    {
      id: 3,
      title: 'Título do post3',
      annotation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.PURPLE,
      comments: [],
    },
    {
      id: 4,
      title: 'Título do post4',
      annotation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.ORANGE,
      comments: [],
    },
    {
      id: 5,
      title: 'Título do post4',
      annotation:
        'Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.ROSE,
      comments: [],
    },
  ];

  public postit: PostitProxy;

  public isLiked: boolean;

  private postitId: number;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.postitId = +this.activatedRoute.snapshot.params.id;
  }

  public ngOnInit(): void {
    this.getPostIt();
  }

  public getPostIt(): void {
    this.postit = this.postitArray.find((post) => post.id === this.postitId);
  }

  public setLikeToPostIt(): void {
    this.isLiked = !this.isLiked;
  }
}
