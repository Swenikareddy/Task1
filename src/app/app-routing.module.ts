import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KudoswallComponent } from './kudoswall/kudoswall.component';
import { ProkudoswallComponent } from './prokudoswall/prokudoswall.component';
import { KudoswalleduComponent } from './kudoswalledu/kudoswalledu.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  {path: 'kudoswall.com', component: KudoswallComponent},
  {path: 'prokudoswall', component: ProkudoswallComponent},
  {path: 'kudoswalledu', component: KudoswalleduComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: IndexpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
