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
  isNotAdmin:any = false;
  theId:any;
  logoutButtonText: string = 'Se déconnecter';

  constructor(private authenticationService : ConnexionService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') !== undefined && sessionStorage.getItem('admin') !== undefined) {
      this.isConnected = true;
      // Cast the string value of the key 'admin' (from sessionStorage) into a boolean
      this.isAdmin = sessionStorage.getItem("admin");
      this.isAdmin = JSON.parse(this.isAdmin);
      // Change the value of isNotAdmin based on the value of isAdmin
      // isNotAdmin is true when the user is a regular user
      if (this.isConnected == true && this.isAdmin==false) {
        this.isNotAdmin=true
      }

      // Get the user's info from his/her id
      this.theId = sessionStorage.getItem("id");
      this.authenticationService.getUserById(this.theId).subscribe(data => {
        this.account = data;
      });
    }
  }

  //TODO: Factoriser le code pour placer la fonction de déconnexion dans le connexion.services
  logout() {
    sessionStorage.clear();
    this.isConnected = false;
    window.location.reload();
  }
}
