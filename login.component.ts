import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  password!: string
  username!: string;

  constructor(private loginService: LoginService, private router: Router){
  }

  onSubmit() {
     console.log("triggered")
    this.loginService.login(this.username, this.password).subscribe((response: any) => {
      console.log('response',response);
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/welcome']);
        console.log("got it")
      } else {
        console.log('Login failed');
      }
    });
  }
  
}