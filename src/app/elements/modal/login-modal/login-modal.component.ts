import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { ProgressSpinerComponent } from '../../progress-spiner/progress-spiner.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private authenticationService: AuthenticationService,
    private router: Router, private loggedUserService: LoggedUserService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  loadingToDashboard() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'DashComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

  login(username: string, password: string) {
    const success = this.authenticationService.authenticate(username, password);
    if(success) {
      const loggedUser = this.authenticationService.getUser(username);
      this.loggedUserService.setCurrentUser(JSON.stringify(loggedUser));
      this.loadingToDashboard();
      this.closeModal();
    }

    else {
      //TODO: erros
    }

  }

}
