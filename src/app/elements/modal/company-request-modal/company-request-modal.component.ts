import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EventsService } from 'src/app/services/events.service';
import { MatDialog } from '@angular/material';
import { ProgressSpinerComponent } from '../../progress-spiner/progress-spiner.component';

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

  loadingToCompany() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'CompanyComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

  makeCompanyRequest(eventName: string, minAge: number, maxAge: number, sex: string[]) {
    const currentUser: User = JSON.parse(this.loggedUserService.getCurrentUser());
    const request: CompanyRequest = {
      requestOwner: currentUser,
      eventName: eventName,
      minAge: minAge,
      maxAge: maxAge,
      sex: sex
    }
    this.requestService.doCompanyRequest(request);
    this.loadingToCompany();
    this.closeModal();

  }

}
