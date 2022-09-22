import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSearchComponent } from './components/album-search/album-search.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';

const routes: Routes = [
  {path: 'spotify', component: AlbumSearchComponent},
  {path: 'callback', component: LoginCallbackComponent},
  {path: '', redirectTo: '/spotify', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
