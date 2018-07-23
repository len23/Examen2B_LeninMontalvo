import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, NavigationExtras } from '@angular/router';
import {User} from '../User'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

 

  message: string;
  aparecerBool = true;
  
  model= new User();



  constructor(public authService: LoginService, public router: Router) {
    // this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }



  onSubmit() {

    // this.message = 'Trying to log in ...';
    
    console.log('Entramo al SUBMIT');


    this.authService.login().subscribe(() => {
      console.log('this.authService.isLoggedIn ', this.authService.isLoggedIn);

      // this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/Home';
        console.log('REDIRECT ', redirect);
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

