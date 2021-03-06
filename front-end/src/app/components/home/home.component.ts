import { Component, OnInit } from '@angular/core';
import { PagerServicesService} from "../../services/pager-services.service";
import { Medicine} from "../../model/medicine";
import { Cart} from "../../model/cart";
import { Router, NavigationExtras} from "@angular/router";
import { Subject } from 'rxjs/Subject';

import { MedicineService} from "../../services/medicine.service";
import {SearchService} from "../../services/search-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(
    private medicineService: MedicineService,
    private pagerService: PagerServicesService,
    private router: Router,
    private searchService: SearchService
  ) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.data;
      });
  }

  medicines: Array<Cart> = new Array<Cart>();

  medicine = new Cart();

  sum:number = 0;
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  private customerName;
  private customerNumber;

  ngOnInit() {


    this.medicineService.getMedicine().subscribe(res=>{


      this.allItems = res.data;;

      // initialize to page 1
      this.setPage(1);

    })

    if(localStorage.getItem('cart'))
      this.medicines = JSON.parse(localStorage.getItem('cart'));
    this.sum = 0;

    if(this.medicines)
      for (let i = 0; i < this.medicines.length; i++)
      {
        this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity;//here price and quantity of type number

      }
  }


  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  addToCart(medicine){


    this.medicine  = new Cart();

    var found = this.medicines.find(function(element) {
      return element.name == medicine.name;
    });
    //
    // console.log('Found');
    // console.log(found);

    if(found) {
      if (found.name == medicine.name) {
        for (let i = 0; i < this.medicines.length; i++)
          if (this.medicines[i].name == medicine.name) {
            this.medicines[i].quantity = this.medicines[i].quantity + 1;
            this.allItems[i].quantity--;

            console.log('Quantity: '+this.allItems[i].quantity);

            // this.sum += this.medicines[i].quantity* this.medicines[i].price;
            // console.log(this.medicines[i].quantity)
          }
      }
    }
    else {
      this.medicine._id = medicine._id;
      this.medicine.name = medicine.name;
      this.medicine.price = medicine.price;
      this.medicine.quantity = 1;

      for (let i=0; i<this.allItems.length;i++)
      {
        if(this.medicine.name == this.allItems[i].name)
          this.allItems[i].quantity--;
      }

      // this.sum += this.medicine.quantity* this.medicine.price;

      this.medicines.push(this.medicine);

    }


    this.sum = 0;

    for (let i = 0; i < this.medicines.length; i++)
    {
      this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity;//here price and quantity of type number

      console.log(typeof this.sum);//but this print NaN
    }

    // console.log(this.medicines);


    localStorage.setItem('cart',JSON.stringify(this.medicines));



  }

  removeFromCart(cnt,medicine){
    for (let i = 0; i < this.medicines.length; i++)
      if (this.medicines[i].name == medicine.name) {

        this.medicines[i].quantity--;
        if(this.medicines[i].quantity<=0)
          this.medicines.splice(i,1);
        // console.log(this.medicines[i].quantity)
      }

    this.sum = 0;

    for (let i = 0; i < this.medicines.length; i++)
    {
      this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity;//here price and quantity of type number

      console.log(typeof this.sum);//but this print NaN
    }
    localStorage.setItem('cart',JSON.stringify(this.medicines));

  }

  removeAllFromCart(medicine){
    for (let i = 0; i < this.medicines.length; i++)
      if (this.medicines[i].name == medicine.name) {

        this.medicines.splice(i,1);
        // console.log(this.medicines[i].quantity)
      }

    this.sum = 0;

    for (let i = 0; i < this.medicines.length; i++)
    {
      this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity;//here price and quantity of type number

      console.log(typeof this.sum);//but this print NaN
    }

    localStorage.setItem('cart',JSON.stringify(this.medicines));

  }

  updateTheMedicine(medicine){
    console.log(medicine._id);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "_id": medicine._id,
        "quantity": medicine.quantity
      }
    };



    for (let i = 0; i < this.medicines.length; i++)
      if (this.medicines[i].name == medicine.name) {

        this.medicines[i].quantity = 0;
        if(this.medicines[i].quantity<=0)
          this.medicines.splice(i,1);
        // console.log(this.medicines[i].quantity)
      }

    this.sum = 0;

    for (let i = 0; i < this.medicines.length; i++)
    {
      this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity;//here price and quantity of type number

      console.log(typeof this.sum);//but this print NaN
    }
    localStorage.setItem('cart',JSON.stringify(this.medicines));

    this.router.navigate(['update-medicine'], navigationExtras);
  }


}
