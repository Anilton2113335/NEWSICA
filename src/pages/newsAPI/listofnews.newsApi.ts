import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class newsApi{
  http:any;
  key: string;
  data:any;

  constructor(http: Http){
    this.http=http;	
    this.key = '417bf57859954953b1200aadc22b41c3';
  }

  getArticles(source){
    return new Promise(resolve => {
            this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.key).map(res => res.json()).subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
    });
  }

}


