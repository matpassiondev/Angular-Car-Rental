import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  account:any;
  customerBookings:any;
  theId: any;

  constructor(private authenticationService : ConnexionService, private bookingService : BookingService) { }

  ngOnInit(): void {
    this.theId = sessionStorage.getItem('id')
    if (this.theId !== undefined) {
      this.authenticationService.getUserById(this.theId).subscribe(data => {
        this.account = data;
      });

      this.bookingService.getCustomerBookings(this.theId).subscribe(data => {
        this.customerBookings = data;
        console.log(this.customerBookings);
      })


    }
    
  }

}
