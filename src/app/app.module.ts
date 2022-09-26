import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumSearchComponent } from './components/album-search/album-search.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';
import { PlayerComponent } from './components/player/player.component';
import { MainComponent } from './components/game/main/main.component';
import { PlayComponent } from './components/game/play/play.component';
import { StartComponent } from './components/game/start/start.component';
import { FinishComponent } from './components/game/finish/finish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchComponent,
    LoginCallbackComponent,
    PlayerComponent,
    MainComponent,
    PlayComponent,
    StartComponent,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


