import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../modal/login-modal/login-modal.component';
import { RegisterModalComponent } from '../modal/register-modal/register-modal.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProgressSpinerComponent } from '../progress-spiner/progress-spiner.component';
import { bufferWhen } from 'rxjs/operators';

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
    private router: Router, public dialog: MatDialog) {
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

  toggleDropdownCollapsed(e): void {
    this.dropdownCollapsed = !this.dropdownCollapsed;  
  }

  

  logout() {
    this.loggedUser = null;
    this.loggedUserService.logoutUser(JSON.stringify(this.loggedUser));
    this.router.navigate(['/home']).finally();
  }

  openDashboardLoading() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'DashComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

  openHomeLoading() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'HomeComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

  navigateThrough(): void {
    if(this.loggedUser) {
      this.openDashboardLoading();
    } else {
      this.openHomeLoading();
    }
  }

  goToProfile() {
    const dialogRef = this.dialog.open(ProgressSpinerComponent, { data: { component: 'ProfileComp'}, width: '300px', height: '300px', panelClass: 'transparent' });
    dialogRef.afterClosed().subscribe(res => {});
  }

}
