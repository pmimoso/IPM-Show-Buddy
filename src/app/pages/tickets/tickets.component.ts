import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { EventsService } from 'src/app/services/events.service';
import { TicketSellRequestModalComponent } from 'src/app/elements/modal/ticket-sell-request-modal/ticket-sell-request-modal.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  ticketSellRequest: TicketSellRequest[] = [];

  allEvents: Show[] = [];
  eventsCtrl = new FormControl();

  loggedUser: User = null;

  constructor(private requestService: RequestsService,
    private modal: NgbModal, private loggedUserService: LoggedUserService,
    private eventsService: EventsService) {
    this.ticketSellRequest = this.requestService.getTicketSellRequestList();
    this.loggedUser = JSON.parse(this.loggedUserService.getCurrentUser());
    this.allEvents = this.eventsService.getAllShows();
     }

  ngOnInit() { }

  public calculateAge(requestIndex: number): number {
    const bDay = new Date(this.ticketSellRequest[requestIndex].requestOwner.birthday);
    const timeDifference = Math.abs(Date.now() - bDay.getTime());
    const age = Math.floor(timeDifference / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  isCurrentUser(requestIndex: number) {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser) {
      const loggedUserHasRequests = this.requestService.getTicketSellRequestList().filter(req => req.requestOwner.username == loggedUser.username);
      if (loggedUserHasRequests.length > 0) {
        document.getElementById("r-card").style.border = "3px solid darkblue";
        return this.ticketSellRequest[requestIndex].requestOwner.username == loggedUser.username;
      }
    }
    return false;
  }

  deleteTicketSellRequest(requestIndex: number) {
    this.requestService.deleteTicketSellRequest(requestIndex);
  }

  getImageFromEvent(name: string) {
    const show: Show = this.eventsService.getShowByName(name);
    return show.eventImage;
  }

  filter(cRequest: CompanyRequest[], showName: string): CompanyRequest[] {

    if(showName) {
    let result: CompanyRequest[] = [];
    result = cRequest.filter(req => req.eventName == showName);
    return result;
  }
  return cRequest;
}

openTicketSellModal() {
  this.modal.open(TicketSellRequestModalComponent, {centered: true});
}

}
