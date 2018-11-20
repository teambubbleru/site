import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

import {ScreenComponent} from './components/screen/screen.component';
import {ListComponent} from './components/list/list.component';
import {MainComponent} from './components/main/main.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [ScreenComponent, ListComponent, MainComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,
    MatSliderModule,
  ],
  exports: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoPlayerModule {
}
