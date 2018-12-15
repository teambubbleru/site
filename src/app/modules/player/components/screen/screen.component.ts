import {Component, OnInit, Input, Output, ViewChild, EventEmitter} from '@angular/core';


@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  public durationStream: number;

  @Input()
  public set isMuted(muted: boolean) {
    this.video.muted = muted;
  };

  @Input()
  public set soundVolume(volume: number) {
    this.video.volume = (volume / 100);
  }

  @Input()
  public set currentStreamTime(value: number) {
    console.log(value);
  }

  @Output('currentStreamTimeChange')
  public currentStreamTimeChange: EventEmitter<number>;

  @Output('loadChange')
  public loadChange: EventEmitter<boolean>;

  @ViewChild('video')
  protected video: HTMLVideoElement;

  constructor() {
    this.durationStream = 0;

    this.loadChange = new EventEmitter<boolean>();
    this.currentStreamTimeChange = new EventEmitter<number>();
  }

  ngOnInit() {
    this.loadChange.emit(false);
  }

}
