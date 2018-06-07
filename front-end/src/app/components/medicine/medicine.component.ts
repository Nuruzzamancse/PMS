import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import { Medicine} from "../../model/medicine";
import { MedicineService} from "../../services/medicine.service";
import {Router} from "@angular/router";
import { ToasterServiceService} from "../../services/toaster-service.service";
import { ValidationService} from "../../services/validation.service";
import { Location} from "@angular/common";

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  formTitle: String;
  medicine: Medicine;
  medicineForm: FormGroup;

  name = new FormControl('',[Validators.required]);
  generic = new FormControl('',[Validators.required]);
  type = new FormControl('',[Validators.required]);
  company = new FormControl('',[Validators.required]);
  price = new FormControl('',[Validators.required]);
  quantity = new FormControl('',[Validators.required]);






  constructor(
    private formBuilder: FormBuilder,
    private medicineService: MedicineService,
    private router: Router,
    private validationService: ValidationService,
    private toasterService: ToasterServiceService,
    private location: Location
  ) {
    this.formTitle = 'Medicine is Here';
  }

  ngOnInit() {
    this.medicineForm = this.formBuilder.group({
      name: this.name,
      generic: this.generic,
      type: this.type,
      company: this.company,
      price: this.price,
      quantity: this.quantity
    })
  }

  createMedicine(formData: FormGroup){
    this.medicine = new Medicine();

    this.medicine.name = formData.value.name;
    this.medicine.generic = formData.value.generic;
    this.medicine.type = formData.value.type;
    this.medicine.company = formData.value.company;
    this.medicine.price = formData.value.price;
    this.medicine.quantity = formData.value.quantity;

    console.log(this.medicine);

    if(!this.validationService.validateMedicine(this.medicine)){
      this.toasterService.Warning("Please fill all the fields!");
      return false;
    }

    this.medicineService.createMedicine(this.medicine)
      .subscribe( resopnse=>{
        this.toasterService.Success("successfully Added Medicine!");
        this.location.back();
      })
  }

}
