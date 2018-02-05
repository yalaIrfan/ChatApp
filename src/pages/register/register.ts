import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[AngularFireAuth]
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    private _auth:AngularFireAuth,
    private alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showAlert(title,msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  registerUser(u,p){
    console.log("signIn",u.value,p.value);
    var user=u.value+'@dev.oop';
    this._auth.auth.createUserWithEmailAndPassword(user,p.value).then((data)=>{
      this.showAlert("Success!","Register success.!");
      console.log(data);
      this.navCtrl.push(LoginPage)
    }).catch(error=>{
      console.log('error')
      this.showAlert("Error!",error.message);
    });

  }


}
