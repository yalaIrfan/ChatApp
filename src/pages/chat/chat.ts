import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers:[AngularFireDatabase,AngularFireAuth]
})
export class ChatPage {
  message:string="";
  username:string="";
  subscription:any;
  history:object[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db:AngularFireDatabase,private _auth:AngularFireAuth) {
    this.username=this._auth.auth.currentUser.email;
   this.db.list('/chat').valueChanges().subscribe(data=>{
    this.history=data;
    console.log(this.history);
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

send(){
  console.log(this.message);
  //this.history=this.db.list('/chat').snapshotChanges.subscribe();
  this.db.list('/chat').push({
    username:this.username,
    message:this.message
  }).then(data=>{console.log('Sent!')});
  this.message='';
}

signout(){
  this._auth.auth.signOut();
  this.navCtrl.setRoot(HomePage);
}

}
