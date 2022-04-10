import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { AccountComponent } from './account/account.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'account', component: AccountComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path: 'user-dashboard', component:UserDashboardComponent},
  {path: 'car-details/:licencePlate', component: CarDetailsComponent},
  {path: 'booking/:licencePlate', component: BookingComponent},
  {path: '**', component: Error404Component},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
