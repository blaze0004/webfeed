import {Component, OnInit} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-webfeed',
  templateUrl: './webfeed.component.html',
  styleUrls: ['./webfeed.component.css']
})
export class WebfeedComponent implements OnInit {
  public imageUrl = null;
  public image: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();

  public get imageObservable() {
    return this.trigger.asObservable();
  }

  public takeScreenShot(): void {
    this.trigger.next();


  }

  public handleImage(webcamImage: WebcamImage) {

    this.image = webcamImage;
    this.imageUrl = this.image.imageAsDataUrl;
  }

  public downloadImage() {

    console.log(this.image.imageAsDataUrl);

  }

  public shareImage() {
    const shareText = window.location.href;
    const imageShareUrl = 'whatsapp://send?text=' + shareText;
    window.open(imageShareUrl);
  }

  public takeAnother() {

    this.imageUrl = null;
  }

  ngOnInit() {
  }

}
