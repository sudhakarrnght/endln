import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { daysInMonth } from 'ionic-angular/util/datetime-util';
import { MilestoneProvider } from '../../providers/milestone/milestone';

/**
 * Generated class for the AddmilestonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmilestone',
  templateUrl: 'addmilestone.html',
})
export class AddmilestonePage {
  p_id: any
  title: string
  days: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private milestone: MilestoneProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');
    this.p_id=this.navParams.get("p_id")
  }

  addMilestone() {
    this.milestone.createmilestone(this.p_id, this.title, this.days)
    this.navCtrl.pop()
  }
}
