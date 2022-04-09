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
  isAdmin:any = false;
  theId:any;
  logoutButtonText: string = 'Se déconnecter';

  constructor(private authenticationService : ConnexionService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') !== undefined && sessionStorage.getItem('admin') !== undefined) {
      this.isConnected = true;
      // Cast the string value of the key 'admin' (from sessionStorage) into a boolean
      this.isAdmin = sessionStorage.getItem("admin");
      this.isAdmin = JSON.parse(this.isAdmin);

      // Get the user's info from his/her id
      this.theId = sessionStorage.getItem("id");
      this.authenticationService.getUserById(this.theId).subscribe(data => {
        this.account = data;
      });
    }
  }

  logout() {
    sessionStorage.clear();
    this.isConnected = false;
    window.location.reload();
  }
}
