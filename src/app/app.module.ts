import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumSearchComponent } from './components/album-search/album-search.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchComponent,
    LoginCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


