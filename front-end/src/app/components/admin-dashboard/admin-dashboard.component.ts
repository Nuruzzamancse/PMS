import { Component, OnInit } from '@angular/core';
import { MedicineService} from "../../services/medicine.service";
import { PagerServicesService} from "../../services/pager-services.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private medicineService: MedicineService,
    private pagerService: PagerServicesService
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

}
