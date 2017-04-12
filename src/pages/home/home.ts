import { Component } from '@angular/core';
import { NavController,NavParams, ModalController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
//import { ModalPage } from './modal-page';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public signatureImage : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  this.signatureImage = navParams.get('signatureImage');;
}
 presentModal() {
    let modal = this.modalCtrl.create(SignaturePage);
    modal.present();
  }


  openSignature() {
    this.navCtrl.push(SignaturePage, {  });
  }

}
