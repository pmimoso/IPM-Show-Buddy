import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { EventsService } from 'src/app/services/events.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProgressSpinerComponent } from '../../progress-spiner/progress-spiner.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ticket-sell-request-modal',
  templateUrl: './ticket-sell-request-modal.component.html',
  styleUrls: ['./ticket-sell-request-modal.component.scss']
})
export class TicketSellRequestModalComponent implements OnInit {

  neg = new FormControl();
  negList: string[] = ['Sim', 'Não'];
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

  private _filterShows(value: string): Show[] {
    const filterValue = value.toLowerCase();

    return this.showList.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  closeModal() {
    this.activeModal.close();
  }

  loadingToTicket() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'TicketComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }


  makeTicketSellRequest(eventName: string, location: string, price: number, negotiable: string) {
    const currentUser: User = JSON.parse(this.loggedUserService.getCurrentUser());

    const request: TicketSellRequest = {
      requestOwner: currentUser,
      eventName: eventName,
      price: price,
      sellLocation: location,
      negotiable: negotiable
    }
    this.requestService.doTicketSellRequest(request);
    this.loadingToTicket();
    this.closeModal();
  }


}
