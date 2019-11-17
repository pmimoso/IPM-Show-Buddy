import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRequestModalComponent } from './company-request-modal.component';

describe('CompanyRequestModalComponent', () => {
  let component: CompanyRequestModalComponent;
  let fixture: ComponentFixture<CompanyRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
