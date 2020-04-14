import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from './services/local-storage.service';
import { fadeStateTrigger } from './fade.animation';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeStateTrigger]
})
export class AppComponent implements OnInit {
  private isAuthenticated = false;
  @HostBinding('@fade') a = true;

  constructor(public authService: AuthService,
              private router: Router,
              private localStorageService: LocalStorageService) {
  }

  public ngOnInit(): void {
    this.isAuthenticated = this.localStorageService.get('authenticated');
    if (!this.isAuthenticated) {
      this.router.navigate(['/layout']);
    }
  }
}
