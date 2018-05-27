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
import { PharmasistDashboardComponent } from './components/pharmasist-dashboard/pharmasist-dashboard.component';
import {PagerServicesService} from "./services/pager-services.service";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManagerComponent } from './components/manager/manager.component';
import { UpdateManagerComponent } from './components/update-manager/update-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    LoginComponent,
    ViewMedicineComponent,
    AddUserComponent,
    PharmasistDashboardComponent,
    AdminDashboardComponent,
    ManagerComponent,
    UpdateManagerComponent
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
    AuthService,
    PagerServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
