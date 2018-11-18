import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  @ViewChild('mainVideo') videoElement:ElementRef;

  @Input()
  set src(src: string)
  {
      this.stopVideo();

      this.videoElement.nativeElement.src = src;

      this.playVideo();
  }

  @Input()
  set time(time: Number)
  {
      this.videoElement.nativeElement.currentTime = time;
  }


  protected playVideo(): void
  {
      this.videoElement.nativeElement.play();
  }

  protected stopVideo(): void
  {
      this.videoElement.nativeElement.pause();
      this.videoElement.nativeElement.currentTime = 0;
  }

}
