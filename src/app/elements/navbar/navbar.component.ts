import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../modal/login-modal/login-modal.component';
import { RegisterModalComponent } from '../modal/register-modal/register-modal.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean = true;

  dropdownCollapsed: boolean = true;

  loggedUser: User;

  constructor(private modalService: NgbModal, private loggedUserService: LoggedUserService,
    private router: Router) {
    loggedUserService.itemValue.subscribe(loggedUser => {
      this.loggedUser = JSON.parse(loggedUser);
     });
  }

  ngOnInit() {

  }

  openLoginModal(): void {
    this.modalService.open(LoginModalComponent);
  }

  openRegisterModal(): void {
    this.modalService.open(RegisterModalComponent);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdownCollapsed(): void {
    event.preventDefault();
    this.dropdownCollapsed = !this.dropdownCollapsed;
  }

  logout() {
    this.loggedUser = null;
    this.loggedUserService.logoutUser(JSON.stringify(this.loggedUser));
    this.router.navigate(['/home']).finally();
  }

  navigateThrough(): void {
    if(this.loggedUser) {
      this.router.navigate(['/dashboard']).finally();
    } else {
      this.router.navigate(['/home']).finally();
    }
  }


}
