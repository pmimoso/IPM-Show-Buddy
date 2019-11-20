import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionConfirmationComponent } from './suggestion-confirmation.component';

describe('SuggestionConfirmationComponent', () => {
  let component: SuggestionConfirmationComponent;
  let fixture: ComponentFixture<SuggestionConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
