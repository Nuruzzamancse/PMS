import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineComponent} from "./components/medicine/medicine.component";
import {LoginComponent} from "./components/login/login.component";
import {ViewMedicineComponent} from "./components/view-medicine/view-medicine.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {PharmasistDashboardComponent} from "./components/pharmasist-dashboard/pharmasist-dashboard.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {ManagerComponent} from "./components/manager/manager.component";
import {UpdateManagerComponent} from "./components/update-manager/update-manager.component";
import {PharmasistComponent} from "./components/pharmasist/pharmasist.component";
import {SalesmanComponent} from "./components/salesman/salesman.component";
import {UpdateMedicineComponent} from "./components/update-medicine/update-medicine.component";
import {SalesmanDashboardComponent} from "./components/salesman-dashboard/salesman-dashboard.component";
import {ManagerDashboardComponent} from "./components/manager-dashboard/manager-dashboard.component";
import { AuthGaurd} from "./gaurds/auth.gaurd";
import {ManagerGaurd} from "./gaurds/manager.gaurd";
import {AutocompleteOptgroupExampleComponent} from "./components/autocomplete-optgroup-example/autocomplete-optgroup-example.component";
import {SalesmanGaurd} from "./gaurds/salesman.gaurd";
import {PharmasistGuard} from "./gaurds/pharmasist.guard";


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'medicine', component: MedicineComponent},
  {path:'login', component: LoginComponent},
  {path:'viewMedicine', component: ViewMedicineComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'addUser/:id', component:AddUserComponent},
  {path:'pDashboard', component: PharmasistDashboardComponent, canActivate: [PharmasistGuard]},
  {path:'aDashboard', component: AdminDashboardComponent, canActivate: [AuthGaurd]},
  {path: 'manager', component: ManagerComponent, canActivate: [ManagerGaurd]},
  {path: 'update-manager/:id', component: UpdateManagerComponent},
  {path: 'pharmasist', component: PharmasistComponent},
  {path: 'salesman', component: SalesmanComponent},
  {path: 'update-medicine/:id', component: UpdateMedicineComponent},
  {path: 'update-medicine', component: UpdateMedicineComponent},
  {path: 'sDashboard', component: SalesmanDashboardComponent, canActivate: [SalesmanGaurd]},
  {path: 'mDashboard', component: ManagerDashboardComponent, canActivate: [ManagerGaurd]},
  {path:'auto', component: AutocompleteOptgroupExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
