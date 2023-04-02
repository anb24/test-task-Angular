import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { ReqresService } from '../../utils/reqres.api';
import { UserData } from '../../models/user';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  public user?: UserData;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _reqresService: ReqresService,
    private _titleService: Title
  ) {}

  setTitle = () => {
    let title = 'Ошибка | User not found';
    if (this.user) {
      title = `Карточка | ${this.user.first_name} ${this.user.last_name}`;
    }
    this._titleService.setTitle(title);
  };

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this._reqresService.getUser(params.get('id')!)
        )
      )
      .subscribe((user) => {
        this.user = user;
        this.setTitle();
      });
  }
}
