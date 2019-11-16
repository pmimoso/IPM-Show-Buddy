import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredErrorModalComponent } from './required-error-modal.component';

describe('RequiredErrorModalComponent', () => {
  let component: RequiredErrorModalComponent;
  let fixture: ComponentFixture<RequiredErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
