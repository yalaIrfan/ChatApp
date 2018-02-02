import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LandingPage } from '../pages/landing/landing';
import { ChatPage } from '../pages/chat/chat';

export const fire={
  apiKey: "AIzaSyBMJ2NRm61HWFeVhTKp7WDGTKJeFIGWlTA",
  authDomain: "yala-e6ffa.firebaseapp.com",
  databaseURL: "https://yala-e6ffa.firebaseio.com",
  projectId: "yala-e6ffa",
  storageBucket: "yala-e6ffa.appspot.com",
  messagingSenderId: "1096776065579"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage,RegisterPage,LandingPage,ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),  AngularFireModule.initializeApp(fire),AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage,RegisterPage,LandingPage,ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
