import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suggestion-confirmation',
  templateUrl: './suggestion-confirmation.component.html',
  styleUrls: ['./suggestion-confirmation.component.scss']
})
export class SuggestionConfirmationComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  redirect() {
    this.closeModal();
    //TODO: redirect to profile
    this.router.navigate(['/dashboard']);

  }


}
