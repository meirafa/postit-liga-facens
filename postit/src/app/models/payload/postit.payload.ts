import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';

export interface PostItPayload {
  id?: number;
  title: string;
  annotation: string;
  color: PostitColorEnum;
}
