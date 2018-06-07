import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
        constructor() { }


        validateRegister(user){
          if(user.firstName == '' || user.email == '' || user.username == ''){
            return false
          }
          else {
            return true
          }


        }

  validateMedicine(medicine){

    if(medicine.name == '' || medicine.company == '' || medicine.price == '' ||medicine.quantity == '' || medicine.type == ''){
      return false
    }
    else {
      return true
    }


  }

        validateEmail(email){

          const  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);

        }
}
