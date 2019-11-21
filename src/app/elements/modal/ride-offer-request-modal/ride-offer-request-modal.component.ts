import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { EventsService } from 'src/app/services/events.service';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ProgressSpinerComponent } from '../../progress-spiner/progress-spiner.component';

@Component({
  selector: 'app-ride-offer-request-modal',
  templateUrl: './ride-offer-request-modal.component.html',
  styleUrls: ['./ride-offer-request-modal.component.scss']
})
export class RideOfferRequestModalComponent implements OnInit {

  showCtrl = new FormControl();
  showList: Show[] = [];
  filteredShows: Observable<Show[]>;

  constructor(public activeModal: NgbActiveModal, private requestService: RequestsService, 
    private loggedUserService: LoggedUserService, private route: Router, 
    private eventsService: EventsService, public dialog: MatDialog) {
      this.filteredShows = this.showCtrl.valueChanges
      .pipe(
        startWith('') ,
        map(state => state ? this._filterShows(state) : this.showList.slice())
      );
    
   }

  ngOnInit() {
    this.showList = this.eventsService.getAllShows();
  }

  closeModal() {
    this.activeModal.close();
  }

  private _filterShows(value: string): Show[] {
    const filterValue = value.toLowerCase();

    return this.showList.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  loadingToRide() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'RideComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }


  makeTicketRequest(eventName: string, from: string, numPlaces: number, price: number) {
    const currentUser: User = JSON.parse(this.loggedUserService.getCurrentUser());
    const request: RideRequest = {
      requestOwner: currentUser,
      eventName: eventName,
      from: from,
      numberOfPlaces: numPlaces,
      price: price
    }
    this.requestService.doRideOfferRequest(request);
    this.loadingToRide();
    this.closeModal();
  }

}
