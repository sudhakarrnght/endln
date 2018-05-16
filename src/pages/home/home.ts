import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  projects:any;

  constructor(public navCtrl: NavController, private project:ProjectProvider) {
    
    console.log("Home Page")
    this.project.getAllProject().subscribe(data=>{
      console.log(data)
      this.projects = data
    })

  }


  navproject(p_id) {
    this.navCtrl.push("ProjectPage",{"p_id":p_id})
  }

  navAddProject() {
    this.navCtrl.push("AddprojectPage")
  }

}
