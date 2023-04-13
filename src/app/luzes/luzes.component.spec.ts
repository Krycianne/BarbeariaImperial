import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzesComponent } from './luzes.component';

describe('LuzesComponent', () => {
  let component: LuzesComponent;
  let fixture: ComponentFixture<LuzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
