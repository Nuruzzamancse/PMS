import { Component, OnInit } from '@angular/core';
import { MedicineService} from "../../services/medicine.service";
import { PagerServicesService} from "../../services/pager-services.service";
import {Router} from "@angular/router";
import { AuthService} from "../../services/auth.service";
import {ToasterServiceService} from "../../services/toaster-service.service";
import {SearchService} from "../../services/search-service.service";
import {Subject} from "rxjs/Subject";



@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {


  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(
    private medicineService: MedicineService,
    private pagerService: PagerServicesService,
    private router: Router,
    private authService: AuthService,
    private toasterService: ToasterServiceService,
    private searchService: SearchService

  ) {

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.data;
      });
  }
      private adminOrManager:any;

      // array of all items to be paged
      private allItems: any[];

      //Manager
      private numberOfManager: any =0;

      //Pharmasist
      private numberOfPharmasist: any =0;

      //Salesman
      private numberOfSaleman: any =0;

      private outOfStock:any = [];

      // pager object
      pager: any = {};

      // paged items
      pagedItems: any[];

      ngOnInit() {

        this.adminOrManager  = localStorage.getItem('category');

        console.log(this.adminOrManager);


        this.medicineService.getMedicine().subscribe(res=>{
          // console.log(res.data);

          this.allItems = res.data;;

          for(let i=0; i<this.allItems.length; i++)
            if(this.allItems[i].quantity==0)
              this.outOfStock.push(this.allItems[i]);

          // initialize to page 1
          this.setPage(1);
        })

        this.authService.getAllUser().subscribe(res=>{

          //console.log(res.data);

          for(let i=0; i<res.data.length; i++)
          {
            if(res.data[i].category=='Manager') {
              this.numberOfManager++;
              // console.log(res.data[i].category);

            }

            // console.log(res.data[i].category);

            if(res.data[i].category=='Pharmasist') {
              this.numberOfPharmasist++;
              // console.log(res.data[i].category);
            }

            if(res.data[i].category=='Salesman'){
              // console.log(i + ' =>'+res.data[i].category);
              this.numberOfSaleman++;
            }


          }

          // console.log(this.numberOfManager);
          // console.log(this.numberOfSaleman);
          // console.log(this.numberOfPharmasist);

        })


      }

      setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
      }


      pharmasistAdd()
      {
        let id="Pharmasist";
        this.router.navigate([`/addUser/${id}`]);
      }

      salesManAdd()
      {
        let id="Salesman";
        this.router.navigate([`/addUser/${id}`]);
      }

  logout(){
    this.authService.logout();
    this.toasterService.Success('Successfully logout!');
    this.router.navigate(['/login']);
  }


}
