import { Component, Input, OnInit } from '@angular/core';

import { Resource } from '../shared/models/resource.interface';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() resources: Resource;
}
