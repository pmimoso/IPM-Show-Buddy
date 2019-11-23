import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { EventSuggestionService } from 'src/app/services/event-suggestion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuggestionConfirmationComponent } from 'src/app/elements/modal/suggestion-confirmation/suggestion-confirmation.component';

@Component({
  selector: 'app-show-suggestion',
  templateUrl: './show-suggestion.component.html',
  styleUrls: ['./show-suggestion.component.scss']
})
export class ShowSuggestionComponent implements OnInit {

  types = new FormControl();
  eventType: string[] = ['Concerto', 'Festival', 'Teatro', 'Museu'];

  loggedUser: User = null;

  constructor(private loggedUserService: LoggedUserService, private eventSuggestionService: EventSuggestionService,
    private modal: NgbModal) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(this.loggedUserService.getCurrentUser());
  }

  submitSuggestion(eventName: string, eventType: string, eventLocation: string, startDate: Date, endDate: Date) {
    const suggestion: ShowSuggestion = {
      name: eventName,
      location: eventType,
      eventType: eventLocation,
      startDate: startDate,
      endDate: endDate,
    }

    this.eventSuggestionService.addEventSuggestion(this.loggedUser.username, suggestion);
    
    this.modal.open(SuggestionConfirmationComponent, {centered: true}); 



  }

}
