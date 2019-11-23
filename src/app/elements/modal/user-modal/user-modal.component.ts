import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  mockUser: User = null;

  constructor(private authService: AuthenticationService) {
    this.mockUser = this.authService.getUser('PatriciaMeireles');
   }

  ngOnInit() {
  }

  public calculateAge(): number {
    const bDay = new Date(this.mockUser.birthday);
    const timeDifference = Math.abs(Date.now() - bDay.getTime());
    const age = Math.floor(timeDifference / (1000 * 3600 * 24) / 365.25);
    return age;
  }

}
