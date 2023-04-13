import { TestBed } from '@angular/core/testing';

import { PlatinadoService } from './platinado.service';

describe('PlatinadoService', () => {
  let service: PlatinadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatinadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
