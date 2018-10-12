import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html'
})
export class CampaignsPage {

  public section: any;

  constructor(
    public navCtrl: NavController
  ) {
    this.section = 'backed';
  }

  showVotePage() {
    this.navCtrl.setRoot('VotePage');
  }

  showRewardsPage() {
    this.navCtrl.setRoot('RewardsPage');
  }

  viewCampaign() {
    this.navCtrl.push('CampaignPage');
  }

}
