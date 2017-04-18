import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../shared/services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections;

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit() {
    this.collections = this.collectionsService.getCollections();
  }

}
