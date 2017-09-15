import { LoginComponent } from '../login/login.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'am-navbar',
  templateUrl: './am-navbar.component.html',
  styleUrls: ['./am-navbar.component.css']
})
export class AmNavbarComponent {

  constructor(private dialog: MdDialog) { }


  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }
}
