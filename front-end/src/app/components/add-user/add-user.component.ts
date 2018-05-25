import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  formTitle: String;
  user: User;
  registerForm: FormGroup;

  Category: any;

  username = new FormControl('',[Validators.required]);
  firstName = new FormControl('',[Validators.required]);
  lastName = new FormControl('',[Validators.required]);
  staffId = new FormControl('',[Validators.required]);
  address = new FormControl('',[Validators.required]);
  phone = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);
  category = new FormControl('',[Validators.required]);

  constructor(

    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.authService.getCategory().subscribe(response=>{
      this.Category = response.data;

      // console.log(this.Category);
    })

    this.registerForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      staffId : this.staffId,
      address: this.address,
      phone: this.phone,
      email: this.email,
      category: this.category
    })
  }

  registerUser(formData: FormGroup){

    this.user = new User();
    this.user.username = formData.value.username;

    console.log(formData.value);

  }

}
