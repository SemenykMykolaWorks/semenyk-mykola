import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './containers/main/main.component';
import { FirstPageComponent } from './containers/first-page/first-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SecondPageComponent } from './containers/second-page/second-page.component';
import { ThirdPageComponent } from './containers/third-page/third-page.component';
import { FilterPipe } from './filter.pipe';
import { FieldComponent } from './components/field/field.component';

@NgModule({
  declarations: [
    MainComponent,
    FirstPageComponent,
    HeaderComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FilterPipe,
    FieldComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  providers: [FilterPipe]
})
export class MainModule {}
