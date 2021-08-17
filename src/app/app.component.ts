import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sample';
  projectsInfo={
    projectList:environment.projects,
    projectUrls:environment.urls,
    logo:environment.logo,
  }

  gotourl() {
    
    window.location.href = "https://www.kudoswall.com";
  }


}