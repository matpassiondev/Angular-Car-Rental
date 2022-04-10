import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }

  getAuthenticate(login:string, mdp:string) {
    return this.http.post('http://localhost:8080/api/v1/admin/login', {
      "id" : 0,
      "login" : login,
      "pwd" : mdp,
      "token" : ""
    })
  }

  getUserById(userId:string) {
    return this.http.get('http://localhost:8080/api/v1/customers/id/'+userId+'', {headers: {accept : '*/*'}})
  }
}
