import { TestBed } from '@angular/core/testing';

import { CandidatesListService } from './candidates-list.service';

describe('CandidatesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidatesListService = TestBed.get(CandidatesListService);
    expect(service).toBeTruthy();
  });
});
