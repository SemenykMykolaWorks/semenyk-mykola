import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../../root-module/services/local-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../root-module/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
              private authService: AuthService,
              private router: Router) { }

  public ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/layout']);
  }

}
