import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import {ToasterServiceService} from "../../services/toaster-service.service";

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  constructor(

    private authServiec: AuthService,
    private router: Router,
    private toasterService: ToasterServiceService
  ) { }



  adminOrManager:any;


  manager = [new User()];

  ngOnInit() {

    if(localStorage.getItem('category'))
      this.adminOrManager = localStorage.getItem('category');
    this.authServiec.getAllUser().subscribe( res=>{
      for(let i=0; i<res.data.length; i++)
      {
        if(res.data[i].category==='Salesman' && res.data[i].firstName) {
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
    let id= this.manager[1].category;
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



}
