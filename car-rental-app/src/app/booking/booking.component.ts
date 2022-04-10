import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  licencePlate : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.licencePlate = this.route.snapshot.paramMap.get('licencePlate');
  }

}
