import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotePage } from './vote';
import { SwingModule } from 'angular2-swing';

@NgModule({
  declarations: [
    VotePage
  ],
  imports: [
    IonicPageModule.forChild(VotePage),
    SwingModule
  ],
})
export class VotePageModule {}
