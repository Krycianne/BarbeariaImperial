import { TestBed } from '@angular/core/testing';

import { LuzesService } from './luzes.service';

describe('LuzesService', () => {
  let service: LuzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
