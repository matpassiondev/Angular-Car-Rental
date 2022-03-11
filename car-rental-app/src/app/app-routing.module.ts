import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'account', component: AccountComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
