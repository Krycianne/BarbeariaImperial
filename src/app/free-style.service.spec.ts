import { TestBed } from '@angular/core/testing';

import { FreeStyleService } from './free-style.service';

describe('FreeStyleService', () => {
  let service: FreeStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
