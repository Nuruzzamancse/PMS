import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {Router, Routes} from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { Location } from '@angular/common';
import { ValidationService} from "../../services/validation.service";
import { ToasterServiceService} from "../../services/toaster-service.service";


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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private validationService: ValidationService,
    private toasterService: ToasterServiceService
  ) { }

  ngOnInit() {

    // this.authService.getCategory().subscribe(response=>{
    //   this.Category = response.data;
    //
    //   console.log(this.Category);
    // })

    this.Category = this.route.snapshot.params.id;

    this.registerForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      staffId : this.staffId,
      address: this.address,
      phone: this.phone,
      email: this.email,
      category: this.Category
    })
  }

  registerUser(formData: FormGroup){

    this.user = new User();
    this.user.username = formData.value.username;
    this.user.password = formData.value.password;
    this.user.firstName = formData.value.firstName;
    this.user.lastName = formData.value.lastName;
    this.user.staffId = formData.value.staffId;
    this.user.address = formData.value.address;
    this.user.phone = formData.value.phone;
    this.user.email = formData.value.email;
    this.user.category = this.Category;

    if(!this.validationService.validateRegister(this.user)){
      this.toasterService.Warning("Please fill all the fields.");
      return false;
    }

    if(!this.validationService.validateEmail(this.user.email)){
      this.toasterService.Error("Please Enter Valid Email");
      return false;
    }

    this.authService.postUser(this.user).subscribe(res=>{
      this.toasterService.Success("Successfully added "+ this.Category);
      this.location.back();
    })

  }

}
