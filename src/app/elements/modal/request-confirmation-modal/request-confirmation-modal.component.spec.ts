import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConfirmationModalComponent } from './request-confirmation-modal.component';

describe('RequestConfirmationModalComponent', () => {
  let component: RequestConfirmationModalComponent;
  let fixture: ComponentFixture<RequestConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
