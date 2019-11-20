import { TestBed } from '@angular/core/testing';

import { EventSuggestionService } from './event-suggestion.service';

describe('EventSuggestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventSuggestionService = TestBed.get(EventSuggestionService);
    expect(service).toBeTruthy();
  });
});
