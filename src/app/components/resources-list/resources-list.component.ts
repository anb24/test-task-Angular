import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReqresService } from '../../utils/reqres.api';
import { ResourceData } from '../../models/resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  public resources$: Observable<ResourceData[]> = new BehaviorSubject([]);

  constructor(private _reqresService: ReqresService) {}

  ngOnInit(): void {
    this.resources$ = this._reqresService.getResources();
  }
}
