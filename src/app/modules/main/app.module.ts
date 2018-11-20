import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VideoPlayerModule} from "../video-player/video-player.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        VideoPlayerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
