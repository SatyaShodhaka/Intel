import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Camera } from '@ionic-native/camera/ngx';
import { NgProgressModule } from '@ngx-progressbar/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCOFW9RjBbGoCHSDAUulkpq3qWl5i5L1Kk",
  authDomain: "myapp-aa82e.firebaseapp.com",
  databaseURL: "https://myapp-aa82e.firebaseio.com",
  projectId: "myapp-aa82e",
  storageBucket: "myapp-aa82e.appspot.com",
  messagingSenderId: "727251922897",
  appId: "1:727251922897:web:7c9295a1645562d8f03af0",
  measurementId: "G-53ZVSZ133J"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  NgProgressModule, AngularFireModule.initializeApp(config),
  AngularFirestoreModule, // firestore
  AngularFireAuthModule, // auth
  AngularFireStorageModule],//storage
  providers: [
    StatusBar,
    Camera,
    // {provide: ErrorHandler, useClass: IonicErrorHandler}
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}
