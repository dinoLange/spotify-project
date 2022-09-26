import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSearchComponent } from './components/album-search/album-search.component';
import { FinishComponent } from './components/game/finish/finish.component';
import { MainComponent } from './components/game/main/main.component';
import { PlayComponent } from './components/game/play/play.component';
import { StartComponent } from './components/game/start/start.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';

const routes: Routes = [
  {path: '', redirectTo: '/spotify', pathMatch: 'full' },
  {path: 'spotify', component: AlbumSearchComponent},
  {path: 'callback', component: LoginCallbackComponent},
  {path: 'game/:type/:id', component: MainComponent,
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
