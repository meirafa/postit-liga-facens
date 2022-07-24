import { PostitColorEnum } from './../enums/postit-color.enum';
import { CommentProxy } from './comment.proxy';
export interface PostitProxy {
  id: number;
  title: string;
  annotation: string;
  color: PostitColorEnum;
  comments?: CommentProxy[];
}
