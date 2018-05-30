import { Injectable} from "@angular/core";
import { Router , CanActivate} from "@angular/router";
import { AuthService} from "../services/auth.service";

@Injectable()
export class PharmasistGuard implements CanActivate{


  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  canActivate(){
    if(this.authService.loggedIn()&&localStorage.getItem('category')=='Pharmasist'){
      return true;
    }


    else {

      window.alert("You don't have permission to view this page, Login as Pharmasist first");

      this.router.navigate(['/login']);

      return false;
    }
  }



}
