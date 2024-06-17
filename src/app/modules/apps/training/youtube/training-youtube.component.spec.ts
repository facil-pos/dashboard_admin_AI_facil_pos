import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingYoutubeComponent } from './training-youtube.component';

describe('TrainingYoutubeComponent', () => {
  let component: TrainingYoutubeComponent;
  let fixture: ComponentFixture<TrainingYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
