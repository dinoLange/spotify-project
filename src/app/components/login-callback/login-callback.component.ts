import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/api/spotify.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.less']
})
export class LoginCallbackComponent implements OnInit {

  constructor( 
    private router: Router,
    private route: ActivatedRoute,  
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: any) => {
      var access_token = new URLSearchParams(fragment).get('access_token');
      
      if (access_token != null) {
        this.spotifyService.setAccessToken(access_token);
      }
      this.router.navigateByUrl('/spotify')

  })
  }

}
