import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { RequestsService } from 'src/app/services/requests.service';
import { EventSuggestionService } from 'src/app/services/event-suggestion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from 'src/app/elements/modal/user-modal/user-modal.component';
import { MatDialog } from '@angular/material';
import { ProgressSpinerComponent } from 'src/app/elements/progress-spiner/progress-spiner.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loggedUser: User = null;

  constructor(private loggedUserService: LoggedUserService, private requestsService: RequestsService,
    private suggestionService: EventSuggestionService, private modal: NgbModal, public dialog: MatDialog) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(this.loggedUserService.getCurrentUser());
  }

  getUserTicketRequests() {
    return this.requestsService.getTicketRequestByUsername(this.loggedUser.username);
  }

  getUserRideRequests() {
    return this.requestsService.getRideRequestByUsername(this.loggedUser.username);
  }

  getUserCompanyRequests() {
    return this.requestsService.getCompanyRequestByUsername(this.loggedUser.username);
  }

  getUserSuggestions() {
    return this.suggestionService.getSuggestionsByUsername(this.loggedUser.username);
  }

 convertData(birthday: Date) {
  let day = birthday.getDay();
  let month = birthday.getMonth();
  let year = birthday.getFullYear();
  let stringDate = day + "/" + month + "/" + year;
  return stringDate;
 }
  
  public calculateAge(): number {
    const bDay = new Date(this.loggedUser.birthday);
    const timeDifference = Math.abs(Date.now() - bDay.getTime());
    const age = Math.floor(timeDifference / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  redirectToEvents() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'EventsComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

  openUserModal() {
    const modalRef = this.modal.open(UserModalComponent, { centered: true });
    modalRef.result.then().catch(err => {}).finally();
  }

}
