import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
@Component({selector: 'page-signature', templateUrl: 'signature.html'})

export class SignaturePage {
  @ViewChild(SignaturePad)public signaturePad : SignaturePad;
  private signaturePadOptions : Object = {
    'minWidth': 3,
    
  };

  public signatureImage : string;

  constructor(public navCtrl : NavController, public navParams : NavParams, private screenOrientation : ScreenOrientation, private platform : Platform) {}
  ngOnInit() {

    if (this.platform.is('ios') || this.platform.is('android')) {
      this
        .screenOrientation
        .lock('landscape');
    }

  }
  ngAfterViewInit() {
    this
      .signaturePad
      .set('minWidth', 1);
    this
      .signaturePad
      .clear();
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
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signatureImage = this
      .signaturePad
      .toDataURL();
    if (this.platform.is('ios') || this.platform.is('android') || this.platform.is('windows')) {
      this
        .screenOrientation
        .unlock();
    }
    this
      .navCtrl
      .push(HomePage, {signatureImage: this.signatureImage});
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
