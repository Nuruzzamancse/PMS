import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineComponent} from "./components/medicine/medicine.component";
import {LoginComponent} from "./components/login/login.component";
import {ViewMedicineComponent} from "./components/view-medicine/view-medicine.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {PharmasistDashboardComponent} from "./components/pharmasist-dashboard/pharmasist-dashboard.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {path:'medicine', component: MedicineComponent},
  {path:'login', component: LoginComponent},
  {path:'viewMedicine', component: ViewMedicineComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'addUser/:id', component:AddUserComponent},
  {path:'pDashboard', component: PharmasistDashboardComponent},
  {path:'aDashboard', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
