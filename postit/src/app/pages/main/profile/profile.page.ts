import { Component, OnInit } from '@angular/core';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public postitArray: PostitProxy[] = [];
  constructor() {}

  ngOnInit() {}
}
