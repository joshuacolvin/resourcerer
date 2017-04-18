import { Component, Input } from '@angular/core';

import { Collection } from '../../shared/models/collection.interface';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent {

  @Input() collections: Array<Collection>;
}
