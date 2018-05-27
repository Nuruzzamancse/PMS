import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    private authServiec: AuthService,
    private router: Router
  ) { }

  manager = [new User()];

  ngOnInit() {
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

}
