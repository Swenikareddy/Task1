import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})
export class IndexpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'sample';
  projectsInfo={
  projectList:environment.projects,
  logo:environment.logo,

}
gotourl() {
    
  window.location.href = "https://www.kudoswall.com";
}
 

}
