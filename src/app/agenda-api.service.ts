import { environment } from '../environments/environment';
import { AppError } from './app-error';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import CryptoJS from 'crypto-js';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendaApiService {
  // private agendaUrl = 'http://2.234.133.94/WS_AgeDemo/AgeService.svc';
  private agendaUrl; // = 'http://192.168.1.250/WS_AgeDemo/AgeService.svc';

  private token: any;
  private datiLogin: any;
  private anagrafica: any;
  private currentContact: any = {};

  constructor(private http: Http) {
      this.agendaUrl = environment.agendaUrl;
  }


  getToken() {
    return this.http.get(`${this.agendaUrl}/token`)
        .map((res: Response) => {
            this.token = res.json();
            console.log('Token:', this.token);
            return this.token.GetTokenResult;
        });
  }

  getLogin(loginData: any, token: any): Observable<any> {
    console.log('getLogin: ', loginData, token);
    const ToHash = loginData.username.toUpperCase() + '|' + loginData.password + '|' + token;
    const hashCode = CryptoJS.MD5(ToHash);
    const newTk = hashCode.toString().toLowerCase().replace('-', '');
    return this.http.get(`${this.agendaUrl}/login/${newTk}/${loginData.username}/PC`)
        .map((res: Response) => {
            this.datiLogin = res.json();
            console.log('getLogin:', this.datiLogin);
            return this.datiLogin.UserLoginResult;
        });
  }

  getAnag(pid) {
    return this.http.get(`${this.agendaUrl}/anag/${pid}`)
    // return this.http.get(`${this.agendaBig}/anag/99999`)
        .catch((error: Response) => {
            return Observable.throw(new AppError(error.json()));
        })
        .map((response: Response) => {
            this.anagrafica = response.json();
            console.log('getAnag:', this.anagrafica);
            return this.anagrafica.GetAnagraficheResult;
        });
  }

  getContact(pid, key): Observable<any> {
    return this.http.get(`${this.agendaUrl}/contact/${pid}/${key}`)
      .catch((error: Response) => {
        return Observable.throw(new AppError(error.json()));
      })
      .map((response: Response) => {
            this.currentContact = response.json();
            return this.currentContact.GetContactResult;
      });
}
}
