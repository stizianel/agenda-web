import { AgendaApiService } from '../agenda-api.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {

  token: any;
  newToken: string[];
  isLogin: any;
  logResp: string;
  loginData = { username: '', password: '' };

  constructor(private agendaApi: AgendaApiService) {

  }

  getToken(f) {
    console.log('getToken:', f);
    this.agendaApi.getToken()
    .subscribe(
      (token) => {
      console.log('getToken', token);
      this.token = token;
    });
  }

  login(f) {
    this.loginData.username = f.value.username;
    this.loginData.password = f.value.password;
    this.agendaApi.getLogin(this.loginData, this.token)
    .subscribe((logResp) => {
      if (logResp) {
        this.logResp = logResp;
        this.newToken = this.logResp.split('|', 2);
        console.log('newToken:', this.newToken[1] );
        localStorage.setItem('token', this.newToken[1]);
        this.isLogin = 'true';
      }
    }, (error) => { this.isLogin = 'false';
                    console.log(error);
    });
  }
}
