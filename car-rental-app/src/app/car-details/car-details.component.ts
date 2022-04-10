import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
licencePlate : any;
  constructor(private route: ActivatedRoute, private vehiclesService : VehiclesService) { }
  carDetails :any
  isConnected:boolean = false;
  isAbleToBook: boolean = false;
  isAdmin:any = false;
  isNotAdmin:any = false;

  ngOnInit(): void {
    this.licencePlate = this.route.snapshot.paramMap.get('licencePlate');
    console.log(this.licencePlate);

    this.vehiclesService.getVehicleByLicencePlate(this.licencePlate).subscribe(data => {
      this.carDetails = data;
      console.log("saucisse");
      console.log(this.carDetails);
      console.log("saucisse");
      });

    if (sessionStorage.getItem('id') !== undefined && sessionStorage.getItem('admin') !== undefined) {
      this.isConnected = true;
      // Cast the string value of the key 'admin' (from sessionStorage) into a boolean
      this.isAdmin = sessionStorage.getItem("admin");
      this.isAdmin = JSON.parse(this.isAdmin);
      // Change the value of isNotAdmin based on the value of isAdmin
      // isNotAdmin is true when the user is a regular user
        if (this.isConnected == true && this.isAdmin==false) {
            this.isNotAdmin=true
            this.isAbleToBook=true;
        }
      }
  }

}
