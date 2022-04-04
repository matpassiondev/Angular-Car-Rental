import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  account:any;
  isConnected:boolean = false;
  theId:any;
  constructor(private authenticationService : ConnexionService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') !== undefined) {
      this.isConnected = true;
      this.account = sessionStorage.getItem("id");
      this.authenticationService.getUserById(this.theId).subscribe(data => {
        this.account = data;
      });
    }
  }

}
