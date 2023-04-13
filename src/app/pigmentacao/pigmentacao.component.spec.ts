import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmentacaoComponent } from './pigmentacao.component';

describe('PigmentacaoComponent', () => {
  let component: PigmentacaoComponent;
  let fixture: ComponentFixture<PigmentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigmentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigmentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
