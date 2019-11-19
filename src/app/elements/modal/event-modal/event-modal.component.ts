import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @Input() eventName: string = '';

  show: Show;

  constructor(public activeModal: NgbActiveModal, private showService: EventsService) { }

  ngOnInit() {
    this.show = this.showService.getShowByName(this.eventName);
  }

  closeModal() {
    this.activeModal.close();
  }

}
