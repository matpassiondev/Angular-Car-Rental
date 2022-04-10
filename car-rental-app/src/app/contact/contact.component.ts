import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  theEmail:string = "";
  theSubject:string = "";
  theCountry:string ="";
  theMessage:string ="";


  constructor() { }

  ngOnInit(): void {
    
  }
  sendMessage() {
    console.log('Email: '+this.theEmail+' - Sujet: '+this.theSubject+' - Pays: '+this.theCountry+' - Message: '+this.theMessage);
  }

}
