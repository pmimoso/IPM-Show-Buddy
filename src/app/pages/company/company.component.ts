import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyRequests: CompanyRequest[] = [];

  constructor(private requestService: RequestsService, private loggedUserService: LoggedUserService) {
    this.companyRequests = this.requestService.getCompanyRequestList();
    console.log(this.companyRequests);
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
    if(loggedUser) {
      document.getElementById("r-card").style.border = "3px solid darkblue";
    return this.companyRequests[requestIndex].requestOwner.username == loggedUser.username;
    }
    return false;
  }

  ngOnInit() {
  }

}
