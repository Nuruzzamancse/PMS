import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { OnInit} from "@angular/core";

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MedicineService} from "../../services/medicine.service";
import {log} from "util";

// export class State {
//   constructor(public name: string, public population: string, public flag: string) { }
// }

@Component({
  selector: 'app-autocomplete-optgroup-example',
  templateUrl: './autocomplete-optgroup-example.component.html',
  styleUrls: ['./autocomplete-optgroup-example.component.css']
})
export class AutocompleteOptgroupExampleComponent implements OnInit{
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states = [];

  ngOnInit(){
    this.medicineService.getMedicine().subscribe(res=>{
      res.data.forEach(md=>{
        this.states.push(md);
      })

      console.log(this.states);
    })
  }

  // states: State[] = [
  //   {
  //     name: 'Arkansas',
  //     population: '2.978M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  //   },
  //   {
  //     name: 'California',
  //     population: '39.14M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  //   },
  //   {
  //     name: 'Florida',
  //     population: '20.27M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  //   },
  //   {
  //     name: 'Texas',
  //     population: '27.47M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  //   }
  // ];

  constructor(
    private medicineService: MedicineService
  ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
