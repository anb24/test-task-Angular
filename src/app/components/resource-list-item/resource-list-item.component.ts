import { Component, Input } from '@angular/core';
import { ResourceData } from '../../models/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.css']
})
export class ResourceListItemComponent {
  @Input() resource!: ResourceData;

  public hover = false;
}
