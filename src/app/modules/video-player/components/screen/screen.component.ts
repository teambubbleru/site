import {Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {MatSliderChange} from "@angular/material";
import * as screenfull from 'screenfull';

@Component({
  selector: 'video-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  @ViewChild('videoContainer')
  protected videoContainer: ElementRef;

  @ViewChild('mainVideo')
  protected videoElement: ElementRef;

  public isPlay: boolean;
  public isFullScreen: boolean;
  public isOpenSoundSlider: boolean;
  public isOpenSoundSliderBlock: boolean;
  public maxTime: Number;
  public soundVolume: Number;
  public soundVolumeOld: Number;

  ngOnInit() {
    this.maxTime = 0;
    this.soundVolume = 1;
    this.isPlay = false;
    this.isOpenSoundSlider = false;
    this.isOpenSoundSliderBlock = false;
    this.isFullScreen = screenfull.isFullscreen;

    screenfull.on('change', () => {
      this.isFullScreen = screenfull.isFullscreen;
    });
  }

  @Input()
  set stream(stream: MediaStream)
  {
    this.togglePlay();
    this.videoElement.nativeElement.srcObject = stream;
    this.togglePlay();
  }

  public togglePlay(): void
  {
    if (!this.videoElement.nativeElement.paused) {
      this.videoElement.nativeElement.pause();
    } else if (this.videoElement.nativeElement.paused) {
      this.videoElement.nativeElement.play();
    }

    this.isPlay = !this.videoElement.nativeElement.paused;
  }

  public toggleFullScreen(): void
  {
    if (screenfull.enabled === true) {
      screenfull.toggle(this.videoContainer.nativeElement);
    }
  }

  public toggleSound(): void
  {
    if (this.soundVolumeOld === null || this.soundVolumeOld === undefined) {
      this.soundVolumeOld = this.soundVolume;
      this.soundVolume = 0;

      this.updateVideoSoundVolume();

      return;
    }

    if (this.soundVolumeOld !== null) {
      this.soundVolume = this.soundVolumeOld;
      this.soundVolumeOld = null;

      this.updateVideoSoundVolume();

      return;
    }
  }

  public onChangeSoundVolume(event: MatSliderChange): void
  {
    this.soundVolume = event.value / 100;

    this.updateVideoSoundVolume();
  }

  protected updateVideoSoundVolume(): void
  {
    this.videoElement.nativeElement.volume = this.soundVolume;
  }

}
