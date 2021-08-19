import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KudoswallComponent } from './kudoswall/kudoswall.component';
import { KudoswalleduComponent } from './kudoswalledu/kudoswalledu.component';
import { ProkudoswallComponent } from './prokudoswall/prokudoswall.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    KudoswallComponent,
    ProkudoswallComponent,
    KudoswalleduComponent,
    IndexpageComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
