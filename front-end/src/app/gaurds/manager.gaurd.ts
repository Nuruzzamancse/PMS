import { Injectable} from "@angular/core";
import { Router , CanActivate} from "@angular/router";
import { AuthService} from "../services/auth.service";

@Injectable()
export class ManagerGaurd implements CanActivate{


  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  canActivate(){
    if(this.authService.loggedIn()&&localStorage.getItem('category')=='Manager' || localStorage.getItem('category')=='Admin'){
      return true;
    }


    else {

      window.alert("You don't have permission to view this page, Login as Manager or Admin first");

      this.router.navigate(['/login']);

      return false;
    }
  }



}
