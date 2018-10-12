import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html'
})
export class CampaignPage {

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
    this.navCtrl.setRoot("RewardsPage");
  }

}
