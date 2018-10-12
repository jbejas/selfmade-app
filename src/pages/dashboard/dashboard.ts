import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  public mission: string = '';

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  leaderboard() {
    this.navCtrl.push('LeaderboardPage');
  }

}
