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
import { PharmasistComponent } from './components/pharmasist/pharmasist.component';
import { SalesmanComponent } from './components/salesman/salesman.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import { SalesmanDashboardComponent } from './components/salesman-dashboard/salesman-dashboard.component';
import {ToasterServiceService} from "./services/toaster-service.service";
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import {AuthGaurd} from "./gaurds/auth.gaurd";
import {ManagerGaurd} from "./gaurds/manager.gaurd";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from "@angular/material"
import { MatFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { AutocompleteOptgroupExampleComponent } from './components/autocomplete-optgroup-example/autocomplete-optgroup-example.component';
import {PharmasistGuard} from "./gaurds/pharmasist.guard";
import {SalesmanGaurd} from "./gaurds/salesman.gaurd";
import { AutoCompleteModule} from "ng4-auto-complete";
import {SearchService} from "./services/search-service.service";


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
    UpdateManagerComponent,
    PharmasistComponent,
    SalesmanComponent,
    UpdateMedicineComponent,
    SalesmanDashboardComponent,
    ManagerDashboardComponent,
    AutocompleteOptgroupExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AutoCompleteModule
  ],
  providers: [
    MedicineService,
    AuthService,
    PagerServicesService,
    ToasterServiceService,
    AuthGaurd,
    ManagerGaurd,
    PharmasistGuard,
    SalesmanGaurd,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
