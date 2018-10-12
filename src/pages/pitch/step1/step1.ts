import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html'
})
export class Step1Page {

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  step2() {
    this.navCtrl.push('Step2Page');
  }

}
