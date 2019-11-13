import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule} from '@angular/material';


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
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [MatDatepickerModule],
  entryComponents: [
    LoginModalComponent,
    RegisterModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
