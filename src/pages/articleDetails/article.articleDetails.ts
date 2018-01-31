import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { gotoUrlPage } from '../gotoUrl/goto.gotoUrl';
import * as _ from 'lodash';
import * as moment from 'moment'; 

@Component({
  selector: 'page-articleDetails',
  templateUrl: 'article.articleDetails.html',
})

export class articleDetailsPage{
  item: any;
  name: string;
  xcolor : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
    this.item =  this.navParams.get('item');
    this.name =  this.navParams.get('name');
    this.xcolor = this.navParams.get('colorx');
  }

  openArticle(url,item,name,colorx) {
    this.navCtrl.push(gotoUrlPage, { url: url, item : item, name : name, colorx: colorx});
  }

}


