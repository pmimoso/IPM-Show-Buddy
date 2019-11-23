import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-spiner',
  templateUrl: './progress-spiner.component.html',
  styleUrls: ['./progress-spiner.component.scss']
})
export class ProgressSpinerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProgressSpinerComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  ngOnInit() {
    this.closeModal();
  }

  closeModal() {
    setTimeout(() => { this.dialogRef.close(); }, 1000);

    if (this.data.component == 'DashComp') {
      setTimeout(() => { this.router.navigate(['/dashboard']).finally(); }, 1200);
    }

    if (this.data.component == 'EventsComp') {
      setTimeout(() => { this.router.navigate(['/events']).finally(); }, 1200);
    }

    if (this.data.component == 'HomeComp') {
      setTimeout(() => { this.router.navigate(['/home']).finally(); }, 1200);
    }

    if (this.data.component == 'CompanyComp') {
      setTimeout(() => { this.router.navigate(['/company']).finally(); }, 1200);
    }

    if (this.data.component == 'TicketComp') {
      setTimeout(() => { this.router.navigate(['/tickets']).finally(); }, 1200);
    }

    if (this.data.component == 'RideComp') {
      setTimeout(() => { this.router.navigate(['/ride']).finally(); }, 1200);
    }

    if (this.data.component == 'DelCompanyComp') {
      setTimeout(() => { this.router.navigate(['/company']).finally(); }, 1200);
    }

    if (this.data.component == 'DelTicketComp') {
      setTimeout(() => { this.router.navigate(['/tickets']).finally(); }, 1200);
    }

    if (this.data.component == 'DelRideComp') {
      setTimeout(() => { this.router.navigate(['/ride']).finally(); }, 1200);
    }

    if (this.data.component == 'ProfileComp') {
      setTimeout(() => { this.router.navigate(['/profile']).finally(); }, 1200);
    }




  }
}