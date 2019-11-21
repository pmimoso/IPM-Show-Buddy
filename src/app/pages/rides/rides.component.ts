import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';
import { RideOfferRequestModalComponent } from 'src/app/elements/modal/ride-offer-request-modal/ride-offer-request-modal.component';
import { ProgressSpinerComponent } from 'src/app/elements/progress-spiner/progress-spiner.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {

  rideRequests: RideRequest[] = [];

  allEvents: Show[] = [];
  eventsCtrl = new FormControl();

  loggedUser: User = null;


  constructor(private requestService: RequestsService,
    private modal: NgbModal, private loggedUserService: LoggedUserService,
    private eventsService: EventsService, public dialog: MatDialog) {
    this.rideRequests = this.requestService.getRideOfferRequestsList();
    this.loggedUser = JSON.parse(this.loggedUserService.getCurrentUser());
    this.allEvents = this.eventsService.getAllShows();
     }

  ngOnInit() {
  }

   //TODO: put on service
   public calculateAge(requestIndex: number): number {
    const bDay = new Date(this.rideRequests[requestIndex].requestOwner.birthday);
    const timeDifference = Math.abs(Date.now() - bDay.getTime());
    const age = Math.floor(timeDifference / (1000 * 3600 * 24) / 365.25);
    return age;
  }


  isCurrentUser(requestIndex: number) {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser) {
      const loggedUserHasRequests = this.requestService.getRideOfferRequestsList().filter(req => req.requestOwner.username == loggedUser.username);
      if (loggedUserHasRequests.length > 0) {
        document.getElementById("r-card").style.border = "3px solid darkblue";
        return this.rideRequests[requestIndex].requestOwner.username == loggedUser.username;
      }
    }
    return false;
  }

  

  openRequestModal() {
    this.modal.open(RideOfferRequestModalComponent, { centered: true });
  }

  deleteRequest(requestIndex: number) {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'DelRideComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
    this.requestService.deleterRideOfferRequest(requestIndex);
  }

  filter(rideReq: RideRequest[], showName: string): RideRequest[] {

    if(showName) {
    let result: RideRequest[] = [];
    result = rideReq.filter(req => req.eventName == showName);
    return result;
  }
  return rideReq;
}

}
