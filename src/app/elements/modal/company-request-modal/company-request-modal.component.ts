import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-company-request-modal',
  templateUrl: './company-request-modal.component.html',
  styleUrls: ['./company-request-modal.component.scss']
})
export class CompanyRequestModalComponent implements OnInit {

  sex = new FormControl();
  showCtrl = new FormControl();
  showList: Show[] = [];
  filteredShows: Observable<Show[]>;
  sexList: string[] = ['Feminino', 'Masculino', 'Outro'];

  constructor(public activeModal: NgbActiveModal, private requestService: RequestsService, 
    private loggedUserService: LoggedUserService, private route: Router, 
    private eventsService: EventsService) {
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

  makeCompanyRequest(eventName: string, minAge: number, maxAge: number, sex: string[]) {
    const currentUser: User = JSON.parse(this.loggedUserService.getCurrentUser());
    console.log(currentUser);
    const request: CompanyRequest = {
      requestOwner: currentUser,
      eventName: eventName,
      minAge: minAge,
      maxAge: maxAge,
      sex: sex
    }
    this.requestService.doCompanyRequest(request);
    console.log(this.requestService.getCompanyRequestList());
    this.closeModal();
    this.route.navigate(['/company']).finally();

  }

}
