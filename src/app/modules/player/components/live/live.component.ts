import {Component, OnInit} from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  animations: [
    trigger('showHide', [
      transition('* => loop', [
        animate('0.5s', style({
          opacity: 1
        })),
        animate('1s', style({
          opacity: 0.2
        })),
        animate('0.5s', style({
          opacity: 1
        })),
      ]),
    ]),
  ]
})
export class LiveComponent implements OnInit {

  public state: string;

  constructor() {
  }

  ngOnInit() {
  }

  onAnimationDone(event: AnimationEvent): void {
    this.state = '';

    setTimeout(() => {
      this.state = 'loop';
    }, 0);
  }

}
