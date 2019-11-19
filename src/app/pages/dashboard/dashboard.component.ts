import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyRequestModalComponent } from 'src/app/elements/modal/company-request-modal/company-request-modal.component';
import { EventsService } from 'src/app/services/events.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EventModalComponent } from 'src/app/elements/modal/event-modal/event-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  type = new FormControl();
  showCtrl = new FormControl();
  typeList: string[] = ['Concerto', 'Festival', 'Teatro', 'Museu'];
  showList: Show[] = [];
  filteredShows: Observable<Show[]>;


  constructor(private modal: NgbModal, private eventsService: EventsService) {
    this.filteredShows = this.showCtrl.valueChanges
    .pipe(
      startWith('') ,
      map(state => state ? this._filterShows(state) : this.showList.slice())
    );
   }

   private _filterShows(value: string): Show[] {
    const filterValue = value.toLowerCase();

    return this.showList.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.showList = this.eventsService.getAllShows();
  }

  openRequestModal() {
    this.modal.open(CompanyRequestModalComponent, { centered: true});
  }

  //TODO: if event does not exist, popup another modal
  openEventModal(eventName: string) {
    console.log(eventName);
    const modalRef = this.modal.open(EventModalComponent, { centered: true });
    modalRef.componentInstance.eventName = eventName;
    modalRef.result.then().catch(err => {}).finally();
  }

}
