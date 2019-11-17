import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyRequestModalComponent } from 'src/app/elements/modal/company-request-modal/company-request-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  type = new FormControl();
  typeList: string[] = ['Concerto', 'Festival', 'Teatro', 'Museu'];

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  openRequestModal() {
    this.modal.open(CompanyRequestModalComponent, { centered: true});
  }

}
