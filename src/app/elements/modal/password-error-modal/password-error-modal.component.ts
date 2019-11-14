import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-password-error-modal',
  templateUrl: './password-error-modal.component.html',
  styleUrls: ['./password-error-modal.component.scss']
})
export class PasswordErrorModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.activeModal.close();
  }

}
