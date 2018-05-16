import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';

/**
 * Generated class for the AddprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproject',
  templateUrl: 'addproject.html',
})
export class AddprojectPage {

  title: string
  short_des: string
  des: string
  client: string
  finish_date: string

  p_id:number

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private project: ProjectProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprojectPage'); 
  }

  addProject() {
    this.project.createProject(this.title, this.short_des, this.des, this.client, this.finish_date)
    this.navCtrl.pop()
  }

  

}
