import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { PasswordErrorModalComponent } from '../password-error-modal/password-error-modal.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  taste = new FormControl();
  tasteList: string[] = ['Rock', 'Rap', 'Ópera', 'Metal', 'Museus', 'Festivais de verão', 'Teatros'];

  constructor(public activeModal: NgbActiveModal, private confirmationModalService: NgbModal,
    private passwordErrorModalService: NgbModal, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.activeModal.close();
  }

  openConfirmModal(): void {
    this.confirmationModalService.open(ConfirmationModalComponent);
  }

  openPasswordErrorModal(): void {
    this.passwordErrorModalService.open(PasswordErrorModalComponent);
  }

  register(username: string, password: string, confirmationPassword: string, birthday: Date, tastes: string[]) {

    const passwordConfirmed: boolean = this.authenticationService.passwordConfirmed(password, confirmationPassword);

    if (passwordConfirmed) {

      const newUser: User = {
        username: username,
        password: password,
        birthday: birthday,
        tastes: tastes
      }
      this.authenticationService.register(newUser);

      this.closeModal();
      this.openConfirmModal();

    }

    else {
      this.openPasswordErrorModal();
    }

  }

}
