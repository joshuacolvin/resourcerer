import { Component, Input } from '@angular/core';

import { Collection } from '../../shared/models/collection.interface';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

  @Input() collection: Collection;

}
