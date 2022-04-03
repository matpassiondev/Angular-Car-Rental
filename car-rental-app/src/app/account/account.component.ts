import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  theLogin : string = "";
  thePassword : string = "";
  user :any
  constructor(private authenticationService : ConnexionService) { }

  ngOnInit(): void {
    
  }
  // Connect user
  getAuthentification() {
    if (this.theLogin !== "" && this.thePassword !=="") {
      this.authenticationService.getAuthenticate(this.theLogin, this.thePassword).subscribe(data => {
        this.user = data;
        console.log("authentification works");
        sessionStorage.setItem('admin', this.user.admin);
        sessionStorage.setItem('id', this.user.id);
      });
    } else {
      console.log("please enter a login and a password");
    }

    //TODO : rediriger l'utilisateur vers une page "Vous êtes connectés en tant que" une fois que la connexion est réussie
    //TODO : adapter le menu principal en fonction de si l'utilisateur est connecté ou non, et en fonction de qui est connecté (admin ou non admin)

  }
  // Disconnect user
  logout() {
    sessionStorage.clear();
  }
  

}
