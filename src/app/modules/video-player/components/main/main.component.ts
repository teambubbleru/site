import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public playingStream: MediaStream;

  ngOnInit() {
  }

  public onChangeStreamSrc(stream: MediaStream): void
  {
    this.playingStream = stream;
  }

}
