import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { newsApi } from '../../providers/newsAPI/listofnews.newsApi'; 
import * as _ from 'lodash';
import * as moment from 'moment';
import { articleDetailsPage } from '../articleDetails/article.articleDetails';

@Component({
  selector: 'page-intoArticles',
  templateUrl: 'intoArticles.html',
})

export class intoArticlesPage{
  source_id: string;
  sources : Array<any>; 
  name: string;
  colorx: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsApi : newsApi) {
     this.source_id =  this.navParams.get('id');
     this.colorx =  this.navParams.get('agr');
     console.log('test', this.colorx);
  }

  ionViewDidLoad(){ 
         this.newsApi.getArticles(this.source_id).then((resp: any) => {   
            if (resp.status == 'ok') {
                this.sources = resp.articles;
                console.log('sources-->:', this.sources);
            }
        })
   }

   gotoArticlePage(item,name,colorx){
      this.navCtrl.push(articleDetailsPage,{
            item : item,
            name : name,
            colorx : colorx
      });
   }
}

