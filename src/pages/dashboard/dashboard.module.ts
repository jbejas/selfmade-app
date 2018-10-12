import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
// PIPES
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DashboardPage)
  ],
})
export class DashboardPageModule {}
