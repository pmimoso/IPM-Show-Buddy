import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyRequests: CompanyRequest[] = [];

  constructor(private requestService: RequestsService) {
    this.companyRequests = this.requestService.getCompanyRequestList();
  }

  //TODO: put on service
  public calculateAge(requestIndex: number): number {
    const bDay = new Date(this.companyRequests[requestIndex].requestOwner.birthday);
    const timeDifference = Math.abs(Date.now() - bDay.getTime());
    const age = Math.floor(timeDifference / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  ngOnInit() {
  }

}
