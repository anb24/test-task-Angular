import { Component, Input } from '@angular/core';
import { ResourceData } from '../../models/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resourse.component.css']
})
export class ResourceComponent {
  @Input() resource!: ResourceData;

  public hover = false;
}
