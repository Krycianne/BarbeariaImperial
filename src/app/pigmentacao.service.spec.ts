import { TestBed } from '@angular/core/testing';

import { PigmentacaoService } from './pigmentacao.service';

describe('PigmentacaoService', () => {
  let service: PigmentacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PigmentacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
