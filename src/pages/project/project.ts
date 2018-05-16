import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UtilityProvider } from '../../providers/utility/utility';
import { ProjectProvider } from '../../providers/project/project';
import { MilestoneProvider } from '../../providers/milestone/milestone';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

  p_id: number

  project_detail: any
  milestones: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utility: UtilityProvider,
    private project: ProjectProvider,
    private alertCtrl: AlertController,
    private milestone: MilestoneProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
    this.p_id = this.navParams.get('p_id')
    console.log(this.p_id)

    this.project.selectProject(this.p_id).subscribe(data => {
      console.log(data)
      this.project_detail = data
    })

    this.milestone.selectMilestone(this.p_id).subscribe(data => {
      console.log(data)
      this.milestones = data
    })


  }

  navChats() {
    this.navCtrl.push("ChatPage")
  }

  addMilestone() {

    this.navCtrl.push("AddmilestonePage", { "p_id": this.p_id })

  }

  reorderItems(indexes) {
    console.log("item changed")
  }

}
