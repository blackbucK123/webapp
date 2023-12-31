import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTournamentsComponent } from './manage-tournaments.component';

describe('ManageTournamentsComponent', () => {
  let component: ManageTournamentsComponent;
  let fixture: ComponentFixture<ManageTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTournamentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
