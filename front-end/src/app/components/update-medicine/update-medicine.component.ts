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

  private quantity:any = 0;

  ngOnInit() {

    let id2;

    this.route.queryParams.subscribe(params => {
      console.log(params["_id"]);
      id2 = params["_id"];
      console.log(params["quantity"]);
      this.quantity = params["quantity"];
    });

    let id = this.route.snapshot.params.id || id2;
    this.medicienService.getSingleMedicine(id).subscribe(res=>{
      this.medicine = res.data;
      this.medicine.quantity -= this.quantity;
      if(this.quantity>0){
        this.medicienService.updateMedicine(this.medicine).subscribe(res=>{
          // console.log('In update' + res.data);

          this.router.navigate(['/sDashboard']);
        })
      }
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
