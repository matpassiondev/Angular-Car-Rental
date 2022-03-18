import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
cars = [];
  constructor(private vehiclesService : VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesService.getVehicles().subscribe(
      data => {this.cars = data},
      error => console.log(error),
    );
  }

}
