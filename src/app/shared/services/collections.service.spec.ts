/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollectionsService } from './collections.service';

describe('CollectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionsService]
    });
  });

  it('should ...', inject([CollectionsService], (service: CollectionsService) => {
    expect(service).toBeTruthy();
  }));
});
