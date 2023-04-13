import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStyleComponent } from './free-style.component';

describe('FreeStyleComponent', () => {
  let component: FreeStyleComponent;
  let fixture: ComponentFixture<FreeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
