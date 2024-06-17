import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDetailsComponent } from './documents-details.component';

describe('DocumentsDetailsComponent', () => {
  let component: DocumentsDetailsComponent;
  let fixture: ComponentFixture<DocumentsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsDetailsComponent]
    });
    fixture = TestBed.createComponent(DocumentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
