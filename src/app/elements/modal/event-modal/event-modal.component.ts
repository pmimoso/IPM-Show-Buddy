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

  found: boolean = false;

  constructor(public activeModal: NgbActiveModal, private showService: EventsService) { }

  ngOnInit() {
    console.log(this.eventName);
    this.show = this.showService.getShowByName(this.eventName);
  }

  showFound(): boolean {
    console.log(this.show);
    if (this.show == undefined) {
      this.found = false;
    }
    else {
      this.found = true;
    }
    return this.found;
  }

  closeModal() {
    this.activeModal.close();
  }

}
