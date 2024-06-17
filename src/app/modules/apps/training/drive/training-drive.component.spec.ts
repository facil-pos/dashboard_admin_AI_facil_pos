import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdriveComponent } from './training-drive.component';

describe('TrainingdriveComponent', () => {
  let component: TrainingdriveComponent;
  let fixture: ComponentFixture<TrainingdriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingdriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
