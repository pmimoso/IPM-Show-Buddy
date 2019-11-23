import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CompanyComponent } from './pages/company/company.component';
import { RidesComponent } from './pages/rides/rides.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ShowSuggestionComponent } from './pages/show-suggestion/show-suggestion.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'ride',
    component: RidesComponent
  },
  {
    path: 'tickets',
    component:  TicketsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'suggestion',
    component: ShowSuggestionComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
