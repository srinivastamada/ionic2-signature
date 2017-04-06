import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public signatureImage : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.signatureImage = navParams.get('signatureImage');;
}
 


  openSignature() {
    this.navCtrl.push(SignaturePage, {  });
  }

}
