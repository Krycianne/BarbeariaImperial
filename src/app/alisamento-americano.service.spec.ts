import { TestBed } from '@angular/core/testing';

import { AlisamentoAmericanoService } from './alisamento-americano.service';

describe('AlisamentoAmericanoService', () => {
  let service: AlisamentoAmericanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlisamentoAmericanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
