import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {

  public section: any;

  constructor(
    public navCtrl: NavController
  ) {
    this.section = 'backed';
  }

  showCampaignsPage() {
    this.navCtrl.setRoot("CampaignsPage");
  }

  showVotePage() {
    this.navCtrl.setRoot("VotePage");
  }

}
