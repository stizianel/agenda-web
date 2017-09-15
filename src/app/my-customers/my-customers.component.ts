
import { AgendaApiService } from '../agenda-api.service';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.css']
})
export class MyCustomersComponent implements OnInit {
  token;
  customers: Anagrafica[];
  anag$;

  constructor(private agendaApi: AgendaApiService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.anag$ = this.agendaApi.getAnag(this.token)
      .do(val => console.log(`anag$: ${val}`))
      .subscribe(result => {
        this.customers = JSON.parse(result);
      });
  }
}
export interface Anagrafica {
  CAP: string;
  CFPiva: string;
  Comune: string;
  Denominazione: string;
  ErrorCode: string;
  ErrorDesc: string;
  Indirizzo: string;
  Localita: string;
  Pin: string;
  Provincia: string;
}

