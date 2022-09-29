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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatFormFieldModule,
    MatListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


