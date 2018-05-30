import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { User} from "../../model/user";
import { ToasterServiceService} from "../../services/toaster-service.service";
import {isSuccess} from "@angular/http/src/http_utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formTitle: String;
  user: User;
  loginForm: FormGroup;


  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterServie: ToasterServiceService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    })
  }

  getUser(formData: FormGroup){
    this.user = new User();

    this.user.username = formData.value.username;
    this.user.password = formData.value.password;


    this.authService.getUser(this.user).subscribe(response=>{

      console.log(response);

      if(!response.success){
        this.toasterServie.Warning(response.message);
      }else{

        this.toasterServie.Success("Successfully logged in as " + response.data.category);

        this.authService.storeUserData(response.token,response.data);

        localStorage.setItem('category',response.data.category);

        if(response.data.category=="Pharmasist"){
          this.router.navigate(['/pDashboard']);
        }

        else if(response.data.category=="Salesman")
          this.router.navigate(['/sDashboard']);

        else if(response.data.category=="Admin")
          this.router.navigate(['/aDashboard']);

        else if(response.data.category=="Manager")
          this.router.navigate(['/mDashboard']);
      }

    })

  }


}
