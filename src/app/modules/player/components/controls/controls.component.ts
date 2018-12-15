import {Component, EventEmitter, Output, Input, ViewChild, ElementRef} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import * as moment from 'moment'
import {MatSelectChange, MatSlider, MatSliderChange} from "@angular/material";
import {DeviceDetectorService} from 'ngx-device-detector';
import {QualityDto} from "./quality-dto";

const HOUR_TIMESTAMP = 60 * 60;

const TIMEOUT_AFTER_HIDE = 2 * 1000;

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('show => hide', [
        animate('1s')
      ]),
      transition('hide => show', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class ControlsComponent {

  public isShow: boolean;

  public isDisableSoundVolumeSlider: boolean;

  public opacity: number;

  public isDesktop: boolean;

  @Input()
  public durationStream: number;

  @Input()
  public currentStreamTime: number;

  @Input()
  public currentSoundValue: number;

  @Input()
  public qualityList: Array<QualityDto>;

  @Input()
  public isFullScreen: boolean;

  @Input()
  public isPlay: boolean;

  @Input()
  public isShowPlayButton: boolean;

  @Input()
  public isShowPlayListButton: boolean;

  @Input()
  public isShowSoundControl: boolean;

  @Input()
  public isShowTimer: boolean;

  @Input()
  public isShowTimeProgress: boolean;

  @Input()
  public isShowQualitySelect: boolean;

  @Input()
  public isShowSettingButton: boolean;

  @Input()
  public isShowFullScreenButton: boolean;

  @Output('onPlayClick')
  public onPlayClick: EventEmitter<MouseEvent>;

  @Output('onTogglePlayListClick')
  public onTogglePlayListClick: EventEmitter<MouseEvent>;

  @Output('onSettingsClick')
  public onSettingsClick: EventEmitter<MouseEvent>;

  @Output('onToggleFullScreen')
  public onToggleFullScreen: EventEmitter<MouseEvent>;

  @Output('onChangeSoundVolume')
  public onChangeSoundVolume: EventEmitter<MatSliderChange>;

  @Output('onChangeTimeProgress')
  public onChangeTimeProgress: EventEmitter<MatSliderChange>;

  @Output('onChangeQuality')
  public onChangeQuality: EventEmitter<MatSelectChange>;

  protected timerOutShowHideControls;

  protected lastSoundVolume: number;

  @ViewChild('controls')
  protected controls: ElementRef;

  @ViewChild('soundVolumeSlider')
  protected soundVolumeSlider: MatSlider;

  constructor(protected deviceDetectorService: DeviceDetectorService) {
    this.durationStream = 0;
    this.currentStreamTime = 0;
    this.currentSoundValue = 100;
    this.opacity = 1;

    this.qualityList = [];
    this.lastSoundVolume = null;

    this.isShow = true;
    this.isDisableSoundVolumeSlider = false;
    this.isFullScreen = false;
    this.isPlay = false;

    this.isShowPlayButton = true;
    this.isShowPlayListButton = false;
    this.isShowSoundControl = true;
    this.isShowTimer = true;
    this.isShowTimeProgress = true;
    this.isShowQualitySelect = true;
    this.isShowSettingButton = true;
    this.isShowFullScreenButton = true;

    this.isDesktop = deviceDetectorService.isDesktop();

    this.onPlayClick = new EventEmitter<MouseEvent>();
    this.onTogglePlayListClick = new EventEmitter<MouseEvent>();
    this.onSettingsClick = new EventEmitter<MouseEvent>();
    this.onToggleFullScreen = new EventEmitter<MouseEvent>();

    this.onChangeSoundVolume = new EventEmitter<MatSliderChange>();
    this.onChangeTimeProgress = new EventEmitter<MatSliderChange>();

    this.onMouseOutFromControls();
  }

  public getTimeFormatted(value: number = 0): string {
    let timeFormat = 'mm:ss';

    if (value >= HOUR_TIMESTAMP) {
      timeFormat = 'hh:mm:ss';
    }

    return moment(moment.duration(value, 'seconds').asMilliseconds()).utcOffset(0).format(timeFormat);
  }

  public onMouseOverToControls(): void {
    if (this.timerOutShowHideControls) {
      clearTimeout(this.timerOutShowHideControls);
    }

    this.isShow = true;
  }

  public onMouseOutFromControls(): void {
    this.timerOutShowHideControls = setTimeout(() => {
      this.isShow = false;
    }, TIMEOUT_AFTER_HIDE);
  }

  public onToggleSound(): void {
    if (this.lastSoundVolume === null) {
      this.lastSoundVolume = this.currentSoundValue;

      this.currentSoundValue = 0;
      this.isDisableSoundVolumeSlider = true;

      this.sendEventSoundVolumeChange();

      return;
    }

    this.currentSoundValue = this.lastSoundVolume;
    this.isDisableSoundVolumeSlider = false;

    this.sendEventSoundVolumeChange();

    this.lastSoundVolume = null;
  }

  protected sendEventSoundVolumeChange(): void {
    let matSliderChange: MatSliderChange = new MatSliderChange();
    matSliderChange.source = this.soundVolumeSlider;
    matSliderChange.value = this.currentSoundValue;

    this.onChangeSoundVolume.emit(matSliderChange);
  }

  public onAnimationDone(): void {
    this.opacity = parseInt(window.getComputedStyle(this.controls.nativeElement).opacity);
  }

}
