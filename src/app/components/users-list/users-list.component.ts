import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../../utils/reqres.api';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(private _reqresService: ReqresService) {}

  deleteUserWithId(id: number) {
    this._reqresService.deleteUser(id);
  }

  get users() {
    return this._reqresService.users;
  }

  ngOnInit(): void {
    this._reqresService.getUsers();
  }
}
