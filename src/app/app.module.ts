import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule, MatFormFieldModule, MatDividerModule, MatTabsModule, MatProgressSpinnerModule, MatTooltipModule, MatAutocompleteModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatListModule} from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

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
import { EventModalComponent } from './elements/modal/event-modal/event-modal.component';
import { ShowSuggestionComponent } from './pages/show-suggestion/show-suggestion.component';
import { SuggestionConfirmationComponent } from './elements/modal/suggestion-confirmation/suggestion-confirmation.component';
import { TicketSellRequestModalComponent } from './elements/modal/ticket-sell-request-modal/ticket-sell-request-modal.component';
import { RideOfferRequestModalComponent } from './elements/modal/ride-offer-request-modal/ride-offer-request-modal.component';
import { ProgressSpinerComponent } from './elements/progress-spiner/progress-spiner.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserModalComponent } from './elements/modal/user-modal/user-modal.component';
import { RequestConfirmationModalComponent } from './elements/modal/request-confirmation-modal/request-confirmation-modal.component';

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
    EventModalComponent,
    ShowSuggestionComponent,
    SuggestionConfirmationComponent,
    TicketSellRequestModalComponent,
    RideOfferRequestModalComponent,
    ProgressSpinerComponent,
    ProfileComponent,
    UserModalComponent,
    RequestConfirmationModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
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
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
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
    CompanyRequestModalComponent,
    EventModalComponent,
    SuggestionConfirmationComponent,
    TicketSellRequestModalComponent,
    RideOfferRequestModalComponent,
    ProgressSpinerComponent,
    UserModalComponent,
    RequestConfirmationModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
