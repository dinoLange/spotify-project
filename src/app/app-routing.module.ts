import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './components/game/finish/finish.component';
import { MainComponent } from './components/game/main/main.component';
import { PlayComponent } from './components/game/play/play.component';
import { StartComponent } from './components/game/start/start.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';
import { AlbumSearchComponent } from './components/search/album-search/album-search.component';
import { MainSearchComponent } from './components/search/main-search/main-search.component';
import { PlaylistSearchComponent } from './components/search/playlist-search/playlist-search.component';

const routes: Routes = [
  {path: '', redirectTo: '/spotify', pathMatch: 'full' },
  {path: 'spotify', component: MainSearchComponent, 
    children: [
      {path: 'album', component: AlbumSearchComponent},
      {path: 'playlist', component: PlaylistSearchComponent},
      {path: 'callback', component: LoginCallbackComponent},
    ]},
  {path: 'callback', component: LoginCallbackComponent},
  {path: 'game', component: MainComponent,
    children: [
      {path: '', component: StartComponent},
      {path: 'play', component: PlayComponent},
      {path: 'finish', component: FinishComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
