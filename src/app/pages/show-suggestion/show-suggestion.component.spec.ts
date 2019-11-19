import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuggestionComponent } from './show-suggestion.component';

describe('ShowSuggestionComponent', () => {
  let component: ShowSuggestionComponent;
  let fixture: ComponentFixture<ShowSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
