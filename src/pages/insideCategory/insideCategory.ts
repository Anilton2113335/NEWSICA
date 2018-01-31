import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { intoArticlesPage } from '../intoArticles/intoArticles';
import { newsApi } from '../../providers/newsAPI/listofnews.newsApi';


@Component({
  selector: 'page-insideCategory',
  templateUrl: 'insideCategory.html',
})

export class insideCategoryPage{
  newslist: string;
  source: any;
  data: any;
  source_id: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public newsApi : newsApi) {
  	 this.newslist = this.navParams.get('newslist').toLowerCase(); 
  }

  ionViewDidLoad(){
         this.newsApi.getSources(this.source_id).then((resp: any) => {
            if (resp.status == 'ok') {
                let filter = _.filter(resp.sources, { 'category': this.newslist });	
                this.data = filter;
            }
        })
   }

   buttonTapped(id,agr){
    this.navCtrl.push( intoArticlesPage, {
      id : id,
      agr : agr
    });
  }

}

