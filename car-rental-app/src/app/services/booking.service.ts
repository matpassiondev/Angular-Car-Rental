import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getCustomerBookings(customerId:string) {
    return this.http.get('http://localhost:8080/api/v1/bookings/customerId/'+customerId+'', {headers: {accept : '*/*'}})
  }
}
