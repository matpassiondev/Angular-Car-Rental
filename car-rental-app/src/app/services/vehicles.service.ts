import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles() {
  let cars = [];
  return this.http.get('http://localhost:8080/api/v1/vehicles', {headers: {accept : '*/*'}})
  }

  getVehicleByLicencePlate(licencePlate:string) {
    let car = [];
    return this.http.get('http://localhost:8080/api/v1/vehicles/'+licencePlate+'', {headers: {accept : '*/*'}})
  }
}
