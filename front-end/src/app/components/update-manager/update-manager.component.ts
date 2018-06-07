import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService} from "../../services/auth.service";
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User} from "../../model/user";
import { ToasterServiceService} from "../../services/toaster-service.service";
import { Location} from "@angular/common";

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {



  user = new User();

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private toasterService: ToasterServiceService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.authService.getSingleUser(id).subscribe(res=>{
        this.user = res.data;
        console.log(this.user.firstName);
    })


  }

  onUpdate(user){
      this.authService.updateUser(user).subscribe( res=>{
        this.toasterService.Success("Successfully updated!");
        this.location.back();
        console.log(res);
      })
  }

}
