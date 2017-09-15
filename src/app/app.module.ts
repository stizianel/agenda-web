import { MdComponentsModule } from './md-components.module';
import { AgendaApiService } from './agenda-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AmNavbarComponent } from './am-navbar/am-navbar.component';
import { HomeComponent } from './home/home.component';
import { MyCustomersComponent } from './my-customers/my-customers.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AmNavbarComponent,
    HomeComponent,
    MyCustomersComponent,
    LoginComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdComponentsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'customers/:id', component: CustomerDetailComponent},
      {path: 'customers', component: MyCustomersComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [
    AgendaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
