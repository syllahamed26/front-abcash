import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-abcash';
  Login = new FormControl();
  Password = new FormControl();

  constructor(){
    console.log(this.Login,this.Password)
    this.sendData(this.Login,this.Password)
  }
  sendData(Login: any, Password: any) {
    console.log(Login.value, Password.value)
  }
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

