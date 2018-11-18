import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/main/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VideoComponent } from './components/video/video.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
    declarations: [
        AppComponent,
        VideoComponent,
        VideosComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
