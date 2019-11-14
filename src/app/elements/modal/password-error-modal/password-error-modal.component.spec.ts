import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordErrorModalComponent } from './password-error-modal.component';

describe('PasswordErrorModalComponent', () => {
  let component: PasswordErrorModalComponent;
  let fixture: ComponentFixture<PasswordErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
