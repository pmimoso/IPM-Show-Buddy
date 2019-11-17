import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private authenticationService: AuthenticationService,
    private router: Router, private loggedUserService: LoggedUserService) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  login(username: string, password: string) {
    const success = this.authenticationService.authenticate(username, password);
    if(success) {
      const loggedUser = this.authenticationService.getUser(username);
      this.loggedUserService.setCurrentUser(JSON.stringify(loggedUser));
      this.closeModal();
      this.router.navigate(['/dashboard']).finally();
    }

    else {
      alert('deu merda');
    }

  }

}
