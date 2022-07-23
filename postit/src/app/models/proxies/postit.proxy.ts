import { PostitColorEnum } from './../enums/postit-color.enum';
export interface PostitProxy {
  id: number;
  title: string;
  annotation: string;
  color: PostitColorEnum;
}
