import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import { ToasterServiceService} from "../../services/toaster-service.service";
import { ReactiveFormsModule} from "@angular/forms";
import { FormsModule} from "@angular/forms";
import { Location} from "@angular/common";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    private authServiec: AuthService,
    private router: Router,
    private toasterService: ToasterServiceService,
    private location: Location
  ) {
  }

  adminOrManager : any;

  manager = [new User()];

  buttonDisabled: boolean = true;

  ngOnInit() {

    this.adminOrManager = localStorage.getItem('category');


    if(this.adminOrManager=='Admin')
      this.buttonDisabled = false;

    this.authServiec.getAllUser().subscribe( res=>{
      for(let i=0; i<res.data.length; i++)
      {
        if(res.data[i].category==='Manager' && res.data[i].firstName) {
          this.manager.push(res.data[i]);
          console.log(this.manager);
        }

      }



    })
  }

  adminHome(){
    this.router.navigate(['/aDashboard']);
  }

  managerAdd()
  {
    let id="Manager";
    this.router.navigate([`/addUser/${id}`]);
  }

  updateManager(id){
    this.router.navigate([`/update-manager/${id}`])
  }

  logout(){
    this.authServiec.logout();
    this.toasterService.Success('Successfully logout!');
    this.router.navigate(['/login']);
  }

  deleteManager(manager){

    var r = confirm("Are you sure!");
    if (r == true) {
      this.manager.splice(this.manager.indexOf(manager), 1);
      this.authServiec.deleteUser(manager)
        .subscribe(res=>{
          this.toasterService.Info("Successfully Deleted!!");

        })
    } else {
      this.toasterService.Warning("You have cancelled deletion!!");
    }

    // console.log(manager);

  }

}
