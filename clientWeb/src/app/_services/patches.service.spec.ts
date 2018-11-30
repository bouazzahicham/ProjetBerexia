import { TestBed } from '@angular/core/testing';

import { PatchesService } from './patches.service';

describe('PatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatchesService = TestBed.get(PatchesService);
    expect(service).toBeTruthy();
  });
});
