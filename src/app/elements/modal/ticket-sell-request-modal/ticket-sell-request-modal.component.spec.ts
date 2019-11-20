import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSellRequestModalComponent } from './ticket-sell-request-modal.component';

describe('TicketSellRequestModalComponent', () => {
  let component: TicketSellRequestModalComponent;
  let fixture: ComponentFixture<TicketSellRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSellRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSellRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
