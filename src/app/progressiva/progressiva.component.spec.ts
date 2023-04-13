import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressivaComponent } from './progressiva.component';

describe('ProgressivaComponent', () => {
  let component: ProgressivaComponent;
  let fixture: ComponentFixture<ProgressivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
