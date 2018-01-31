import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule , Http} from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { insideCategoryPage } from '../pages/insideCategory/insideCategory';
import { newsApi } from '../providers/newsAPI/listofnews.newsApi';
import { intoArticlesPage } from '../pages/intoArticles/intoArticles';
import { articleDetailsPage } from '../pages/articleDetails/article.articleDetails';
import { gotoUrlPage } from '../pages/gotoUrl/goto.gotoUrl';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    insideCategoryPage,
    intoArticlesPage,
    articleDetailsPage,
    gotoUrlPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
      IonicModule.forRoot(MyApp)
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    insideCategoryPage,
    intoArticlesPage,
    articleDetailsPage,
    gotoUrlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    InAppBrowser,
    newsApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
