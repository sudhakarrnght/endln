import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MilestoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MilestoneProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MilestoneProvider Provider');
  }

  createmilestone(p_id, title, days) {
    let URI = "http://endln.com/endln/app/";

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "create", "p_id": p_id, "title": title,
        "days": days
      },


      url: any = URI + "milestone.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {

      },
        (error: any) => {

        });
  }

  selectMilestone(p_id) {
    let URI = "http://endln.com/endln/app/";

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "select", "p_id": p_id },


      url: any = URI + "milestone.php";

    return this.http.post(url, JSON.stringify(options), headers)

  }


}
