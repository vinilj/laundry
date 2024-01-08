import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private navctrl: NavController,private statusbar:StatusBar) {
    statusbar.backgroundColorByHexString('#642e58')
    statusbar.styleLightContent()
   }
}
