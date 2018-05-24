import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { LoginComponent } from './components/login/login.component';
import {MedicineService} from "./services/medicine.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthService} from "./services/auth.service";
import { ViewMedicineComponent } from './components/view-medicine/view-medicine.component';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    LoginComponent,
    ViewMedicineComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    MedicineService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
