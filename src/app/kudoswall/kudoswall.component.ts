import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kudoswall',
  templateUrl: './kudoswall.component.html',
  styleUrls: ['./kudoswall.component.css']
})
export class KudoswallComponent implements OnInit {

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
