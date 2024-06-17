import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingloomComponent } from './training-loom.component';

describe('TrainingloomComponent', () => {
  let component: TrainingloomComponent;
  let fixture: ComponentFixture<TrainingloomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingloomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
