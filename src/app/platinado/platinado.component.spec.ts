import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinadoComponent } from './platinado.component';

describe('PlatinadoComponent', () => {
  let component: PlatinadoComponent;
  let fixture: ComponentFixture<PlatinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatinadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
