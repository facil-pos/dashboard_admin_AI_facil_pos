import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleListingComponent } from './documents-listing.component';

describe('RoleListingComponent', () => {
  let component: RoleListingComponent;
  let fixture: ComponentFixture<RoleListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleListingComponent]
    });
    fixture = TestBed.createComponent(RoleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
