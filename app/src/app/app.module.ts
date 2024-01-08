import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponentModule } from './common/components/customcomponent.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { PipesModule } from './common/service/pipe/pipes.module';
import { ErrorinterceptorService } from './common/apilayer/error-handling/errorinterceptor.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    CustomComponentModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule
  ],


  providers: [
    StatusBar,
    SplashScreen,
    ReactiveFormsModule,
    Push,
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorinterceptorService, multi: true },
    OneSignal
  ],


  bootstrap: [AppComponent],
})
export class AppModule { }
