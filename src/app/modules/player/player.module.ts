import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {OverlayContainer, FullscreenOverlayContainer} from '@angular/cdk/overlay';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { DeviceDetectorModule } from 'ngx-device-detector';

import {ScreenComponent} from './components/screen/screen.component';
import {MainComponent} from './components/main/main.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ControlsComponent} from './components/controls/controls.component';
import {LiveComponent} from './components/live/live.component';
import {PlayListComponent} from './components/play-list/play-list.component';
import {StreamObjectComponent} from './components/stream-object/stream-object.component';

@NgModule({
  declarations: [ScreenComponent, MainComponent, ControlsComponent, LiveComponent, PlayListComponent, StreamObjectComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,

    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,

    DeviceDetectorModule.forRoot()
  ],
  exports: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers : [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ]
})
export class PlayerModule {
}
