import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../modal/login-modal/login-modal.component';
import { RegisterModalComponent } from '../modal/register-modal/register-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLoginModal(): void {
    this.modalService.open(LoginModalComponent);
  }

  openRegisterModal(): void {
    this.modalService.open(RegisterModalComponent);
  }
}
