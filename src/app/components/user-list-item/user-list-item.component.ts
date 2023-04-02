import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user!: UserData;
  @Output() onDelete = new EventEmitter<number>();

  public deleting = false;
  public getFullName = () => {
    return `${this.user.first_name} ${this.user.last_name}`;
  };

  deleteItem() {
    this.deleting = true;
    this.onDelete.emit(this.user.id);
  }
}
