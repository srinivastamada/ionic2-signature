import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage {
  @ViewChild(SignaturePad)public signaturePad : SignaturePad;
  private signaturePadOptions : Object = {
    'minWidth': 1,
    'canvasWidth': 340,
    'canvasHeight': 200
  };

  public signatureImage : string;

  constructor(public navCtrl : NavController) {}
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
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
