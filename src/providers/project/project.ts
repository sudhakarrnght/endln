import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  constructor(public http: HttpClient) { }

  createProject(title, short_des, description, client, finish_date) {
    let URI = "http://endln.com/endln/app/";

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "create", "title": title,
        "short_des": short_des, "description": description,
        "client": client, "finish_date": finish_date
      },


      url: any = URI + "project.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {

      },
        (error: any) => {

        });
  }

  selectProject(p_id) {
    let URI = "http://endln.com/endln/app/";

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "select", "p_id": p_id },


      url: any = URI + "project.php";

    return this.http.post(url, JSON.stringify(options), headers)
      
  }

  getAllProject() {
    let URI = "http://endln.com/endln/app/get_projects.php"
    return this.http.get(URI)
  }

}
