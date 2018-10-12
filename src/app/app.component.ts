import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'LoginPage';

  pages: Array<{title: string, component: any, image: string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: 'DashboardPage', image: 'assets/icons/dashboard.svg' },
      { title: 'Enzo Wallet', component: 'LoginPage', image: 'assets/icons/enzo-wallet.svg' },
      { title: 'Pitch', component: 'Step1Page', image: 'assets/icons/pitch.svg' },
      { title: 'Shift', component: 'LoginPage', image: 'assets/icons/shift.svg' },
      { title: 'Settings', component: 'LoginPage', image: 'assets/icons/settings.svg' },
      { title: 'Help', component: 'LoginPage', image: 'assets/icons/help.svg' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.nav.setRoot('VotePage');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  viewProfile() {
    this.nav.setRoot('ProfilePage');
  }

}
