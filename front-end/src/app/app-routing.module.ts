import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineComponent} from "./components/medicine/medicine.component";
import {LoginComponent} from "./components/login/login.component";
import {ViewMedicineComponent} from "./components/view-medicine/view-medicine.component";

const routes: Routes = [
  {path:'medicine', component: MedicineComponent},
  {path:'login', component: LoginComponent},
  {path:'viewMedicine', component: ViewMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
