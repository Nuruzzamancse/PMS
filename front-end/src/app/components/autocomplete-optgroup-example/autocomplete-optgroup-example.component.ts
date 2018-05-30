import {Component} from '@angular/core';
import { OnInit} from "@angular/core";
import { Subject } from 'rxjs/Subject';

import { MedicineService} from "../../services/medicine.service";
import {SearchService} from "../../services/search-service.service";
@Component({
  selector: 'app-autocomplete-optgroup-example',
  templateUrl: './autocomplete-optgroup-example.component.html',
  styleUrls: ['./autocomplete-optgroup-example.component.css']
})
export class AutocompleteOptgroupExampleComponent implements OnInit{


  ngOnInit(){
    this.medicineService.getMedicine().subscribe(res=>{

    })
  }



  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private medicineService: MedicineService
  ) {

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.data;
      });
  }


}
