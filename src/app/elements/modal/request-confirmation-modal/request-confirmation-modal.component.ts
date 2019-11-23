import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-confirmation-modal',
  templateUrl: './request-confirmation-modal.component.html',
  styleUrls: ['./request-confirmation-modal.component.scss']
})
export class RequestConfirmationModalComponent implements OnInit {

  @Input() public user: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
