import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @Input() eventName: string = '';

  show: Show;

  found: boolean = false;


  constructor(public activeModal: NgbActiveModal, private showService: EventsService
    , private router: Router) { }

  ngOnInit() {

    this.show = this.showService.getShowByName(this.eventName);
  }

  showFound(): boolean {
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

  goToSuggestion(): void {
    this.closeModal();
    this.router.navigate(['/suggestion']);
  }

}
