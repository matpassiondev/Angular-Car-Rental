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
  ngOnInit(): void {
    this.licencePlate = this.route.snapshot.paramMap.get('licencePlate');
    console.log(this.licencePlate);

    this.vehiclesService.getVehicleByLicencePlate(this.licencePlate).subscribe(data => {
      this.carDetails = data;
      console.log("saucisse");
      console.log(this.carDetails);
      console.log("saucisse");
      });
  }

}
