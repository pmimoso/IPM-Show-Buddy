import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-suggestion',
  templateUrl: './show-suggestion.component.html',
  styleUrls: ['./show-suggestion.component.scss']
})
export class ShowSuggestionComponent implements OnInit {

  types = new FormControl();
  eventType: string[] = ['Concerto', 'Festival', 'Teatro', 'Museu'];
  

  constructor() { }

  ngOnInit() {
  }

  submitSuggestion(eventName: string, eventType: string, eventLocation: string, startDate: Date, endDate: Date) {
  }

}
