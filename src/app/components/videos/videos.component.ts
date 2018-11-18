import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, AfterViewInit {

  public streams: Array<string> = [];
  public playStreamSrc: string = null;
  public timePlay: Number = 0;

  ngOnInit() {
    this.streams = this.getStreams();
  }

  ngAfterViewInit()
  {
      _.forEach(document.querySelectorAll('.video-list video'), (element) => {
          element.muted = true;
      });
  }

  protected getStreams(): Array<string>
  {
      return [
          'https://www.quirksmode.org/html5/videos/big_buck_bunny.ogv',
          'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.ogv',
      ];
  }

  public onClickVideo(event: MouseEvent): void
  {
      this.playStreamSrc = event.target.src;
      this.timePlay = event.target.currentTime;
  }

}
