import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventList: Show[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventList = this.eventsService.getAllShows();
  }

}
