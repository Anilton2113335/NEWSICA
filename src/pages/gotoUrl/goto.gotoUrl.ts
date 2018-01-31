import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'; 

@Component({
  selector: 'page-gotoURL',
  templateUrl: 'goto.gotoUrl.html',
})

export class gotoUrlPage {

  item: string;
  name: string;
  xcolor: string;
  url: string;
  page: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
    this.item = this.navParams.get('item');
    this.name = this.navParams.get('name');
    this.xcolor = this.navParams.get('colorx');
    this.url = this.navParams.get('url');
  }

  pageContentInAppBrowser(){
    const browser = this.iab.create(this.url, '_self', 'zoom : no');
    browser.show();
  }
}

