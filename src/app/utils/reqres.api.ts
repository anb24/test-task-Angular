import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';

type ReqresResponse<item> = {
  data?: item;
};

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  constructor(private _client: HttpClient) {}

  getUsers() {
    return this._client.get<ReqresResponse<User[]>>(
      'https://reqres.in/api/users'
    );
  }

  getUser(id: string) {
    return this._client
      .get<ReqresResponse<User>>(`https://reqres.in/api/users/${id}`)
      .pipe(map(({ data }) => data));
  }
}
