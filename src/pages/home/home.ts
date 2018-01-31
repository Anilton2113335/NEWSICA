import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { insideCategoryPage } from '../insideCategory/insideCategory';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  icons;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems(); 
  }

  initializeItems(){	

    this.items = [
      'technology',
      'business', 
      'sports', 
      'science',
      'general',
      'entertainment' 
    ];
    this.icons=[
      'assets/icons/cpu.png',  
      'assets/icons/deal.png',
      'assets/icons/cup.png',
      'assets/icons/microscope.png',
      'assets/icons/text-lines.png',
      'assets/icons/television.png' 
    ];

  }

  getIcon(thisItem){
      for(var i = 0; i<this.items.length; i++){
          if(thisItem == this.items[i])
              return this.icons[i];
      }
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }


  buttonTapped(newslist){
    this.navCtrl.push( insideCategoryPage, {
      newslist:newslist
  });
  }

}