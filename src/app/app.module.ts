import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule, MatFormFieldModule, MatTooltipModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatListModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { EventsComponent } from './pages/events/events.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { RidesComponent } from './pages/rides/rides.component';
import { CompanyComponent } from './pages/company/company.component';
import { LoginModalComponent } from './elements/modal/login-modal/login-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RegisterModalComponent } from './elements/modal/register-modal/register-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './elements/modal/confirmation-modal/confirmation-modal.component';
import { PasswordErrorModalComponent } from './elements/modal/password-error-modal/password-error-modal.component';
import { RequiredErrorModalComponent } from './elements/modal/required-error-modal/required-error-modal.component';
import { CompanyRequestModalComponent } from './elements/modal/company-request-modal/company-request-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsComponent,
    HomePageComponent,
    DashboardComponent,
    TicketsComponent,
    RidesComponent,
    CompanyComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ConfirmationModalComponent,
    PasswordErrorModalComponent,
    RequiredErrorModalComponent,
    CompanyRequestModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule],
  entryComponents: [
    LoginModalComponent,
    RegisterModalComponent,
    ConfirmationModalComponent,
    PasswordErrorModalComponent,
    RequiredErrorModalComponent,
    CompanyRequestModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
