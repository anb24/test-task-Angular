import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../models/user';
import { ResourceData } from "../models/resource";
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

type ReqresResponse<item> = {
  data?: item;
};

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  constructor(private _client: HttpClient) {}

  public users = new BehaviorSubject<UserData[]>([]);

  getUsers() {
    return this._client
      .get<ReqresResponse<UserData[]>>('https://reqres.in/api/users')
      .pipe(map(({ data }) => data))
      .subscribe((users) => {
        if (users) {
          this.users.next(users);
        }
      });
  }

  getUser(id: string) {
    return this._client
      .get<ReqresResponse<UserData>>(`https://reqres.in/api/users/${id}`)
      .pipe(map(({ data }) => data));
  }

  deleteUser(id: number) {
    this._client.delete(`https://reqres.in/api/users/${id}`).subscribe(() => {
      const idx = this.users.value.findIndex(({ id: userId }) => userId === id);
      if (idx >= 0) {
        this.users.value.splice(idx, 1);
      }
    });
  }

  getResources() {
    return this._client
      .get<ReqresResponse<ResourceData[]>>(
        'https://reqres.in/api/unknown?per_page=12'
      )
      .pipe(map(({ data }) => data ?? []));
  }
}
