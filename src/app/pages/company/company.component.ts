import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyRequestModalComponent } from 'src/app/elements/modal/company-request-modal/company-request-modal.component';
import { EventsService } from 'src/app/services/events.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ProgressSpinerComponent } from 'src/app/elements/progress-spiner/progress-spiner.component';
import { RequestConfirmationModalComponent } from 'src/app/elements/modal/request-confirmation-modal/request-confirmation-modal.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyRequests: CompanyRequest[] = [];

  allEvents: Show[] = [];
  eventsCtrl = new FormControl();

  loggedUser: User = null;

  constructor(private requestService: RequestsService,
    private modal: NgbModal, private loggedUserService: LoggedUserService,
    private eventsService: EventsService, public dialog: MatDialog) {
    this.companyRequests = this.requestService.getCompanyRequestList();
    this.loggedUser = JSON.parse(this.loggedUserService.getCurrentUser());
    this.allEvents = this.eventsService.getAllShows();
  }

  ngOnInit() {
  }

  //TODO: put on service
  public calculateAge(requestIndex: number): number {
    const bDay = new Date(this.companyRequests[requestIndex].requestOwner.birthday);
    const timeDifference = Math.abs(Date.now() - bDay.getTime());
    const age = Math.floor(timeDifference / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  isCurrentUser(requestIndex: number) {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser) {
      const loggedUserHasRequests = this.requestService.getCompanyRequestList().filter(req => req.requestOwner.username == loggedUser.username);
      if (loggedUserHasRequests.length > 0) {
        document.getElementById("r-card").style.border = "3px solid darkblue";
        return this.companyRequests[requestIndex].requestOwner.username == loggedUser.username;
      }
    }
    return false;
  }

  openConfirmationModal(username: string) {
    const modalRef= this.modal.open(RequestConfirmationModalComponent, { centered: true });
    modalRef.componentInstance.user  = username;
  }

  openRequestModal() {
    this.modal.open(CompanyRequestModalComponent, { centered: true });
  }

  goToProfile() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'ProfileComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

  deleteRequest(requestIndex: number) {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'DelCompanyComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
    this.requestService.deleteCompanyRequest(requestIndex);
  }

  filter(cRequest: CompanyRequest[], showName: string): CompanyRequest[] {

    if(showName) {
    let result: CompanyRequest[] = [];
    result = cRequest.filter(req => req.eventName == showName);
    return result;
  }
  return cRequest;
}


}
