import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-request-modal',
  templateUrl: './company-request-modal.component.html',
  styleUrls: ['./company-request-modal.component.scss']
})
export class CompanyRequestModalComponent implements OnInit {

  sex = new FormControl();
  sexList: string[] = ['Feminino', 'Masculino', 'Outro'];

  constructor(public activeModal: NgbActiveModal, private requestService: RequestsService, 
    private loggedUserService: LoggedUserService, private route: Router) { }

  ngOnInit() {
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
