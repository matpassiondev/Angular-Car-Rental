import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { VehiclesService } from '../services/vehicles.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  //Variables
  licencePlate : any;
  theBeginDate:any;
  theEndDate:any;
  theKilometres:any;
  theId:any;

  //JSON objects
  carDetails:any = new Array();
  theBookingInfos:any;
  account:any = new Array();
  savingResult:any;

  constructor(private route: ActivatedRoute, private vehiclesService : VehiclesService, 
    private authenticationService : ConnexionService, private bookingService : BookingService) { }

  ngOnInit(): void {
    this.licencePlate = this.route.snapshot.paramMap.get('licencePlate');
    
    this.vehiclesService.getVehicleByLicencePlate(this.licencePlate).subscribe(data => {
      this.carDetails.push(data);
    });
    this.theId = sessionStorage.getItem('id')
    if (this.theId !== undefined) {
      this.authenticationService.getUserById(this.theId).subscribe(data => {
        this.account.push(data);
      });
      console.log(this.account);
      console.log(this.account.id);
      console.log(this.account.length);
    }
    
  }

  bookingConfirmed() {
    //get the vehicle infos
    
      console.log(JSON.stringify(this.carDetails));
      console.log(this.carDetails.length);

    //get the customer infos
    

    //prepare the JSON object for booking
    if (this.theBeginDate !== undefined && this.theEndDate !== undefined && this.theKilometres !== undefined && this.theId !== undefined) {
    console.log('ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
      
    this.theBookingInfos = {
      "begin": this.theBeginDate,
      "customer": {
        "address": this.account[0].address,
        "admin": false,
        "birth": this.account[0].birth,
        "driverLicenceNumber": this.account[0].driverLicenceNumber,
        "drivingLicenceExpiration": this.account[0].drivingLicenceExpiration,
        "drivingLicenceGetting": this.account[0].drivingLicenceGetting,
        "firstName": this.account[0].firstName,
        "id": this.account[0].id,
        "login": this.account[0].login,
        "name": this.account[0].name,
        "pwd": this.account[0].pwd,
        "token": "",
        "vehicleClass": ""
      },
      "end": this.theEndDate,
      "id": 0,
      "insurance": true,
      "km": this.theKilometres,
      "vehicle": {
        "brand": this.carDetails[0].brand,
        "color": this.carDetails[0].color,
        "horsePower": this.carDetails[0].horsePower,
        "id": this.carDetails[0].id,
        "kmPrice": this.carDetails[0].kmPrice,
        "licencePlate": this.carDetails[0].licencePlate,
        "model": this.carDetails[0].model,
        "rentalPrice": this.carDetails[0].rentalPrice,
        "urlImg": this.carDetails[0].urlImg,
      }
    }
    this.bookingService.saveBooking(this.theBookingInfos).subscribe(data => {
      this.savingResult = data;
      if (this.savingResult.id !== undefined) {
        console.log('Ok saving works');
      } else {
        console.log('Saving error');
      }
    });
  }
  
}}
