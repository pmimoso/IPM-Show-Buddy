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

  ngOnInit() {
  }

}
