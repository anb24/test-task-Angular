import { Component, Input } from '@angular/core';
import { ReqresService } from '../../utils/reqres.api';
import { UserData, EditUserData } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: UserData;

  constructor(private _reqresService: ReqresService) {}

  public showEditDialog = false;
  public getFullName = () => {
    return `${this.user.first_name} ${this.user.last_name}`;
  };

  public updateUser(newUserData: EditUserData) {
    this._reqresService.updateUser(this.user.id, newUserData).subscribe(() => {
      this.user = { ...this.user, ...newUserData };
      this.showEditDialog = false;
    });
  }
}
