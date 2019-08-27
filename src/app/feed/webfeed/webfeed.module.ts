import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebcamModule} from 'ngx-webcam';
import {WebfeedComponent} from './webfeed.component';



@NgModule({
  declarations: [
    WebfeedComponent
  ],
  imports: [
    CommonModule,
    WebcamModule
  ],
  exports: [
    WebfeedComponent
  ]
})
export class WebfeedModule { }
