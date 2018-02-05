import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log('login');
    this.navCtrl.push(LoginPage);
  }
  register(){
    console.log('register');
    this.navCtrl.push(RegisterPage);
  }
  
}
