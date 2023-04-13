import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlisamentoAmericanoComponent } from './alisamento-americano.component';

describe('AlisamentoAmericanoComponent', () => {
  let component: AlisamentoAmericanoComponent;
  let fixture: ComponentFixture<AlisamentoAmericanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlisamentoAmericanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlisamentoAmericanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
