import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as screenfull from 'screenfull'
import {MatSidenav} from "@angular/material";
import {PlayListComponent} from "../play-list/play-list.component";
import {StreamObjectFactory} from "../../services/stream-object/stream-object-factory.service";
import {StreamObjectDto, StreamObjectTypes} from "../stream-object";
import {ControlsComponent} from "../controls/controls.component";
import {ScreenComponent} from "../screen/screen.component";

export const DEFAULT_THEME = 'dark';

@Component({
  selector: 'video-player',
  templateUrl: './main.component.html',
  styleUrls: ['./main.themes.scss', './main.component.scss']
})
export class MainComponent {

  public isFullScreen: boolean;

  public isShowLife: boolean;

  public isShowPlayButton: boolean;

  public isShowLoader: boolean;

  @Input()
  public theme: string;

  @Input()
  public set streams(streams: Array<Object>) {
    let streamsDTO = this.streamObjectDTOFactoryService.createAndBuildFromArray(streams);

    this.verticalPlayList.streams = streamsDTO;
    this.horizontalPlayList.streams = streamsDTO;
  };

  @ViewChild('videoPlayer')
  protected videoPlayer: ElementRef;

  @ViewChild('sideNavLeft')
  protected sideNavLeft: MatSidenav;

  @ViewChild('verticalPlayList')
  protected verticalPlayList: PlayListComponent;

  @ViewChild('horizontalPlayList')
  protected horizontalPlayList: PlayListComponent;

  @ViewChild('controls')
  protected controls: ControlsComponent;

  @ViewChild('mainVideo')
  protected mainVideo: ScreenComponent;

  constructor(protected streamObjectDTOFactoryService: StreamObjectFactory) {
    this.theme = DEFAULT_THEME;

    this.isFullScreen = false;
    this.isShowLife = false;
    this.isShowPlayButton = false;
    this.isShowLoader = true;

    screenfull.on('change', () => {
      this.onFullScreenChange();
    });
  }

  public toggleFullScreen(): void {
    if (screenfull.enabled) {
      screenfull.toggle(this.videoPlayer.nativeElement);
    }
  }

  public onFullScreenChange(): void {
    this.isFullScreen = screenfull.isFullscreen;
    if (!this.isFullScreen) {

      this.sideNavLeft.close();
    }
  }

  public onClickStreamObject(streamObjectDTO: StreamObjectDto): void
  {
    this.controls.qualityList = streamObjectDTO.qualityList;

    this.isShowLife = streamObjectDTO.type === StreamObjectTypes.LIVE;
    this.isShowPlayButton = streamObjectDTO.type !== StreamObjectTypes.LIVE;
  }
}
