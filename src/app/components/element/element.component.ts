import { Component, OnInit, Input } from '@angular/core';
import { ReqresService } from 'src/app/utils/reqres.api';
import { User as data } from 'src/app/models/user';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent {
  // public users: data[] = [];
  //
  // constructor(private _reqresService: ReqresService) {}
  //
  // ngOnInit(): void {
  //   this._reqresService.getUsers().subscribe(({data}) => {
  //     this.users = data || [];
  //   });
  // }
  @Input() user!: data;
  public getFullName = () => {
    return `${this.user.first_name} ${this.user.last_name}`;
  };
}
