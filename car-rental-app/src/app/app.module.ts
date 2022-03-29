import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { MenuComponent } from './menu_component/menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationsComponent } from './locations/locations.component';
import { AccountComponent } from './account/account.component';
import { CarDetailsComponent } from './car-details/car-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    ContactComponent,
    LocationsComponent,
    AccountComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
