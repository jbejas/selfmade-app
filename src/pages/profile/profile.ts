import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public section: any;

  constructor(
    public navCtrl: NavController
  ) {
    this.section = 'backed';
  }

  showVotePage() {
    this.navCtrl.setRoot('VotePage');
  }

  showCampaignsPage() {
    this.navCtrl.setRoot("CampaignsPage");
  }

  showRewardsPage() {
    this.navCtrl.setRoot("RewardsPage");
  }

}
