import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
@Component({selector: 'page-signature', templateUrl: 'signature.html'})

export class SignaturePage {
  @ViewChild(SignaturePad)public signaturePad : SignaturePad;
  private signaturePadOptions : Object = {
    'minWidth': 1,
    'canvasWidth': 340,
    'canvasHeight': 200
  };

  public signatureImage : string;

  constructor(public navCtrl : NavController, public navParams : NavParams) {}
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

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signatureImage = this
      .signaturePad
      .toDataURL();

       this.navCtrl.push(HomePage, { signatureImage: this.signatureImage });
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}