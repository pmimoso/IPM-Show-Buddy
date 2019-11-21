import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideOfferRequestModalComponent } from './ride-offer-request-modal.component';

describe('RideOfferRequestModalComponent', () => {
  let component: RideOfferRequestModalComponent;
  let fixture: ComponentFixture<RideOfferRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideOfferRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideOfferRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
