import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WebfeedModule} from './feed/webfeed/webfeed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebfeedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
