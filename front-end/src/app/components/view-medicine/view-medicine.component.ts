import { Component, OnInit } from '@angular/core';
import {MedicineService} from "../../services/medicine.service";
import {Router} from "@angular/router";
import { Medicine} from "../../model/medicine";

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {

  medicines = [new Medicine()];

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) { }

  ngOnInit() {
    this.medicineService.getMedicine().subscribe(res=>{
      // console.log(res.data);
      this.medicines = res.data;

     // console.log(this.medicine);


      for(var i=0; i<this.medicines.length; i++)
        console.log(this.medicines[i].price);
    })

  }

}
