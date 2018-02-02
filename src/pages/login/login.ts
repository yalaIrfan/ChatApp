import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LandingPage } from '../landing/landing';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AngularFireAuth]
})
export class LoginPage {

  constructor(public navCtrl: NavController,private _auth:AngularFireAuth ,
    private alertCtrl:AlertController) {

  }

  showAlert(title,msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  
  }

  signIn(u,p){
    console.log("signIn",u.value,p.value)
    this._auth.auth.signInWithEmailAndPassword(u.value+"@dev.oop",p.value).then(data=>{
      
      this.navCtrl.setRoot(ChatPage);
      this.showAlert("Success!","Loggedin success.!");
      
      console.log(data);
    }).catch(error=>{
      console.log('error')
      this.showAlert("Error!",error.message);
    });

  }

}
