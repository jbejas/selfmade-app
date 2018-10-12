import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import {
  StackConfig,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';
import { Helpers } from '../../providers/helpers';
import * as AppConfig from '../../config/config';
import * as jQuery from 'jquery';
//import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
  //providers: [ Http ]
})
export class VotePage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  public stackConfig: StackConfig;
  private votedPitches: any;
  public recentCard: string = '';
  public headers: Headers;
  //public options: RequestOptions;
  public cards: any;
  public play: boolean = true;
  public like: boolean = false;
  public dislike: boolean = false;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public helpers: Helpers,
    //private http: Http,
  ) {
    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      /*throwOutConfidence: (offsetX, offsetY, element) => {
        let choice = Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
        console.log('Choice -> ' + choice);
        return choice;
      },*/
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ionViewDidLoad() {
    this.swingStack.dragstart.subscribe((event: DragEvent) => {
      console.log("Drag Start",event.offset);
      this.play = false;
      this.like = true;
      this.dislike = true;
    });
    this.swingStack.dragmove.subscribe((event: DragEvent) => {
      console.log("Drag Move",event.offset);
      var opacity = 0;
      if(event.offset < 0) {
        console.log('Offset Izquierda -> ' + (event.offset * -1) / 100);
        opacity = (event.offset * -1) / 100;
        jQuery('.dislike').css('opacity',opacity);
      } else {
        console.log('Offset Derecha -> ' + event.offset / 100);
        opacity = event.offset / 100;
        jQuery('.like').css('opacity',opacity);
      }
    });
    this.swingStack.dragend.subscribe((event: DragEvent) => {
      this.play = true;
      this.like = false;
      this.dislike = false;
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VotePage');
    /*this.listPitches();
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });*/
  }

  /*listPitches() {
    let url = AppConfig.config.ENDPOINT_URL + '/startup/list/';
    this.http.get(url,this.options).map((res:Response) => res.text()).subscribe((pitches) => {

      // Set Pitches object with the order data in it.
      this.cards = JSON.parse(pitches);
      console.log('Cards',this.cards)
    })
  }*/

  showFilters() {
    this.navCtrl.push('FiltersPage');
  }

  showCampaignsPage() {
    this.navCtrl.setRoot("CampaignsPage");
  }

  showRewardsPage() {
    this.navCtrl.setRoot("RewardsPage");
  }

  playVideo() {
    console.log('Playing Video');
  }

  /*sendVote(like: boolean) {

    // Get the list of voted pitches
    this.votedPitches = JSON.parse(window.localStorage.getItem('selfmade-voted-pitches'));

    // Get the current Pitch ID.
    let pitchId = document.getElementById("card-stack").lastElementChild.id;

    var flag = 0;

    for(let i = 0; i < this.votedPitches.length; i++) {
      if(this.votedPitches[i] == pitchId) {
        flag = 1;
      }
    }

    if(flag == 1) {

      // Parse ID to API to cast Vote.
      let url = AppConfig.config.ENDPOINT_URL + '/pitch/comment-vote/' + pitchId + '/';
      
      // Remove card from Stack.
      let removedCard = this.cards.pop();
      
      if (like) { // Swiped Right - Up Vote
        this.recentCard = 'You liked: ' + removedCard.title;
        let body = JSON.stringify({ "vote": 1 })
        this.http.put(url,body,this.options).subscribe((result) => {
          console.log('Result', result);
        })
      } else { // Swiped Left - Down Vote
        this.recentCard = 'You disliked: ' + removedCard.title;
        let body = JSON.stringify({ "vote": 2 })
        this.http.put(url,body,this.options).subscribe((result) => {
          console.log('Result', result);
        })
      }

      this.helpers.presentToast(this.recentCard);

      setTimeout(() => {
        //this.resetElements();
      },500);

    } else {
      this.helpers.presentToast('You need to watch the video pitch to vote!');
      this.listPitches();
    }
    
  }*/

}
