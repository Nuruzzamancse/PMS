import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/map';

import { PagerServicesService} from "../../services/pager-services.service";
import { MedicineService} from "../../services/medicine.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToasterServiceService} from "../../services/toaster-service.service";

@Component({
  selector: 'app-pharmasist-dashboard',
  templateUrl: './pharmasist-dashboard.component.html',
  styleUrls: ['./pharmasist-dashboard.component.css']
})
export class PharmasistDashboardComponent implements OnInit {

  constructor(
    private http: Http,
    private pagerService: PagerServicesService,
    private medicineService: MedicineService,
    private router: Router,
    private authService: AuthService,
    private toasterService: ToasterServiceService
  ) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {

    this.medicineService.getMedicine().subscribe(res=>{
      // console.log(res.data);

      this.allItems = res.data;;

      // initialize to page 1
      this.setPage(1);
    })

  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  updateMedicine(id){
    this.router.navigate([`update-medicine/${id}`])
  }

  medicineAdd(){
    this.router.navigate(['/medicine']);
  }

  logout(){
    this.authService.logout();
    this.toasterService.Success('Successfully logout!');
    this.router.navigate(['/login']);
  }

}
