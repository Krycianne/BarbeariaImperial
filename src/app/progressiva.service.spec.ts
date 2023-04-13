import { TestBed } from '@angular/core/testing';

import { ProgressivaService } from './progressiva.service';

describe('ProgressivaService', () => {
  let service: ProgressivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
