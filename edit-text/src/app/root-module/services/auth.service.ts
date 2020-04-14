import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private localStorageService: LocalStorageService) {
    this.isLoggedIn$ = new BehaviorSubject<boolean>(!!this.isAuthenticated);
  }

  public login() {
    this.isLoggedIn$.next(true);
    this.localStorageService.set('authenticated', true);
  }

  public logout() {
    this.isLoggedIn$.next(false);
    this.localStorageService.clear();
  }

  public get isAuthenticated(): string {
    return this.localStorageService.get('authenticated');
  }

}
