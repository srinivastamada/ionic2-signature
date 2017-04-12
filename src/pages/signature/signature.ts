import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
@Component({selector: 'page-signature', templateUrl: 'signature.html'})

export class SignaturePage {
  @ViewChild(SignaturePad)public signaturePad : SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200

  };

  public signatureImage : string;

  constructor(public navCtrl : NavController, public navParams : NavParams, private screenOrientation : ScreenOrientation, private platform : Platform) {}
  ngOnInit() {
 
    if (this.platform.is('ios') || this.platform.is('android')) {
      this
        .screenOrientation
        .lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      // this.canvasResize();
    }

  }
  ngAfterViewInit() {
 
    if (this.platform.is('ios') || this.platform.is('android')) {
      this
        .screenOrientation
        .lock('landscape');
      // this.canvasResize();
    }

    this
      .signaturePad
      .clear();
     this.canvasResize();

  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this
      .signaturePad
      .set('minWidth', 1);
    this
      .signaturePad
      .set('canvasWidth', canvas.offsetWidth);

    this
      .signaturePad
      .set('canvasHeight', canvas.offsetHeight);
  }

  drawClear() {
    this
      .signaturePad
      .clear();
  }

  drawCancel() {
    this
      .navCtrl
      .push(HomePage, {signatureImage: ''});
    this.unlock();
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signatureImage = this
      .signaturePad
      .toDataURL();
    this.unlock();
    this
      .navCtrl
      .push(HomePage, {signatureImage: this.signatureImage});
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  unlock() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      this
        .screenOrientation
        .unlock();
    }
  }
}
