import { Component, Input } from '@angular/core';

import { Resource } from '../../shared/models/resource.interface';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent {
  @Input() resource: Resource;
  isAuthor: boolean = true;
}
