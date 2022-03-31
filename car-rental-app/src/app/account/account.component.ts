import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
user :any
  constructor(private authenticationService : ConnexionService) { }

  ngOnInit(): void {
    this.authenticationService.getAuthenticate('admin', 'admin').subscribe(data => {
      this.user = data;
      console.log("authentification works");
      sessionStorage.setItem('id', this.user.id);
      // TODO : gérer les connexions avec les sessionStorage (stocket l'id et si admin ou non)
      });
  }

}
