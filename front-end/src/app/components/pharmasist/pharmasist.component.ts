import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-pharmasist',
  templateUrl: './pharmasist.component.html',
  styleUrls: ['./pharmasist.component.css']
})
export class PharmasistComponent implements OnInit {

  constructor(

    private authServiec: AuthService,
    private router: Router
  ) { }


  manager = [new User()];


  private category:any;
  private adminOrManager:any;

  ngOnInit() {

    this.adminOrManager = localStorage.getItem('category');

    this.authServiec.getAllUser().subscribe( res=>{
      for(let i=0; i<res.data.length; i++)
      {
        if(res.data[i].category==='Pharmasist' && res.data[i].firstName) {
          this.manager.push(res.data[i]);
          this.category = res.data[i].category;
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


}
