import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-required-error-modal',
  templateUrl: './required-error-modal.component.html',
  styleUrls: ['./required-error-modal.component.scss']
})
export class RequiredErrorModalComponent implements OnInit {

  @Input() requiredValuesNumber: number = 0;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close(this.requiredValuesNumber);
    }

}
