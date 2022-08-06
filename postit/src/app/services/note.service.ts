import { Injectable } from '@angular/core';
import { apiRoutes } from '../../environments/api-routes';
import { AsyncResult } from '../models/interfaces/async-result';
import { PostItPayload } from '../models/payload/postit.payload';
import { PostitProxy } from '../models/proxies/postit.proxy';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private readonly http: HttpAsyncService) {}

  public async getMyNotes(): Promise<AsyncResult<PostitProxy[]>> {
    const [success, error] = await this.http.get<PostitProxy[]>(
      apiRoutes.notes.me
    );

    if (error) {
      return [[], error.error.message];
    }

    return [success];
  }

  public async create(
    postIt: PostItPayload
  ): Promise<AsyncResult<PostItPayload>> {
    const [success, error] = await this.http.post<PostItPayload>(
      apiRoutes.notes.create,
      postIt
    );

    if (error) {
      return [null, error.error.message];
    }

    return [success];
  }

  public async update(
    postIt: PostItPayload
  ): Promise<AsyncResult<PostitProxy>> {
    const url = apiRoutes.notes.update.replace(
      '{noteId}',
      postIt.id.toString()
    );

    const [success, error] = await this.http.put<PostitProxy>(url, postIt);

    if (error) {
      return [null, error.error.message];
    }

    return [success];
  }

  public async delete(id: number): Promise<AsyncResult<boolean>> {
    const url = apiRoutes.notes.delete.replace('{noteId}', id.toString());

    const [, error] = await this.http.delete(url);

    if (error) {
      return [false, error.error.message];
    }

    return [true];
  }

  public async publish(
    postIt: PostItPayload
  ): Promise<AsyncResult<PostitProxy>> {
    return this.update({
      ...postIt,
      isPublic: true,
    });
  }
}
