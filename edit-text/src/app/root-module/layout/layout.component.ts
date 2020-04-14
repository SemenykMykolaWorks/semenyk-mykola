import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public layoutForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService) { }

  public ngOnInit(): void {
    this.layoutForm = new FormGroup({
      'layoutField': new FormControl(null, [Validators.required])
    });
  }

  public layout() {
    const layoutText = this.layoutForm.getRawValue().layoutField;
    this.authService.login();
    this.localStorageService.set('text', layoutText);
    this.router.navigate(['/first-page']);
  }

}
