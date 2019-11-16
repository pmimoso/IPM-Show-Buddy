import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { PasswordErrorModalComponent } from '../password-error-modal/password-error-modal.component';
import { RequiredErrorModalComponent } from '../required-error-modal/required-error-modal.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  taste = new FormControl();
  tasteList: string[] = ['Rock', 'Rap', 'Ópera', 'Metal', 'Museus', 'Festivais de verão', 'Teatros'];

  constructor(public activeModal: NgbActiveModal, private confirmationModalService: NgbModal,
    private passwordErrorModalService: NgbModal, private requiredErrorModalService: NgbModal,
    private authenticationService: AuthenticationService) { }

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

  openRequiredErrorModal(requiredFieldsNumber: number) {
      const modalRef = this.requiredErrorModalService.open(RequiredErrorModalComponent)
      modalRef.componentInstance.requiredValuesNumber = requiredFieldsNumber;
      modalRef.result.then().finally();
  }
  

  register(username: string, password: string, confirmationPassword: string, birthday: Date, tastes: string[]) {
  

    if(username == undefined || password == undefined || confirmationPassword == undefined || birthday == undefined || tastes == undefined) {
      let args = Array.from(arguments);
      const undefinedParameters = args.filter(arg => arg == undefined).length;
      return this.openRequiredErrorModal(undefinedParameters);
    }

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
