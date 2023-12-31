import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVenueComponent } from './manage-venue.component';

describe('ManageVenueComponent', () => {
  let component: ManageVenueComponent;
  let fixture: ComponentFixture<ManageVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageVenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
