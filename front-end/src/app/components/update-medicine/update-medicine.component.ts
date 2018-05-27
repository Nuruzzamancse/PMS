import { Component, OnInit } from '@angular/core';
import { Medicine} from "../../model/medicine";
import { MedicineService} from "../../services/medicine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  constructor(
    private medicienService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  medicine =  new Medicine();

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.medicienService.getSingleMedicine(id).subscribe(res=>{
      this.medicine = res.data;
      console.log(this.medicine);
    })
  }

  onUpdate(medicine)
  {
    this.medicienService.updateMedicine(medicine).subscribe(res=>{
      // console.log('In update' + res.data);

      this.router.navigate(['/pDashboard']);
    })
  }

}
