import {Component, OnInit, AfterViewInit, Output, EventEmitter} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'video-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @Output() onChangeStreamSrc: EventEmitter<MediaStream> = new EventEmitter<MediaStream>();

  public strems: Array<string>;

  ngOnInit() {
    this.strems = [
      '/videos/big_buck_bunny.ogv',
      '/videos/trailer.mp4',
      '/videos/Joren_Falls_Izu_Japan.webm',
      '/videos/Big Buck Bunny-YE7VzlLtp-4.mp4'
    ];
  }

  ngAfterViewInit() {
    _.forEach(document.querySelectorAll('.stream-list video'), (element) => {
      if (element.muted !== undefined) {
        element.muted = true;
      }
    });
  }

  public changeStreamSrc(event: MouseEvent): void
  {
    if (event.target.captureStream !== undefined) {
      this.onChangeStreamSrc.emit(event.target.captureStream(60));
    }
  }

}
