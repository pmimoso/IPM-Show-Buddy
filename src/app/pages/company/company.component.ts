import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyRequestModalComponent } from 'src/app/elements/modal/company-request-modal/company-request-modal.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyRequests: CompanyRequest[] = [];

  loggedUser: User = null;

  constructor(private requestService: RequestsService,
    private modal: NgbModal, private loggedUserService: LoggedUserService) {
    this.companyRequests = this.requestService.getCompanyRequestList();
    this.loggedUser = JSON.parse(this.loggedUserService.getCurrentUser());
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

  openRequestModal() {
    this.modal.open(CompanyRequestModalComponent, { centered: true });
  }

  deleteRequest(requestIndex: number) {
    this.requestService.deleteCompanyRequest(requestIndex);
  }

  ngOnInit() {
  }

}
