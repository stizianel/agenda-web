
import { AgendaApiService } from '../agenda-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  token;
  contact: Contact = new Contact;

  constructor(private route: ActivatedRoute, private agendaApi: AgendaApiService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        console.log('id:', id);
        this.agendaApi.getContact(this.token, id)
        .subscribe((contact: string) => {
          console.log('getContact', contact);
          // this.contact = JSON.parse(contact);
          this.onContactRetrived(contact);
        });
      });
  }
  onContactRetrived(contact: string) {
    this.contact = JSON.parse(contact);
  }

}
