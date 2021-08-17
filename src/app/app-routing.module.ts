import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KudoswallComponent } from './kudoswall/kudoswall.component';

const routes: Routes = [
  {path: 'kudoswall.com', component: KudoswallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
