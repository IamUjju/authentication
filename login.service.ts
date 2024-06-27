import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const payload = { email: username, password: password };
    return this.http.post(`${this.apiUrl}/login`, payload);
  }
  

}