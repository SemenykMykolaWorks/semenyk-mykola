import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {
  public numberOfFields = 3;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
