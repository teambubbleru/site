import {Component, EventEmitter, Input, Output} from '@angular/core';

import {StreamObjectDto} from "../stream-object";

@Component({
  selector: 'play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent {

  @Input()
  public streams: Array<StreamObjectDto>;

  @Input()
  public horizontal: Boolean;

  @Output('onClickStreamObject')
  public onClickStreamObject: EventEmitter<StreamObjectDto>;

  constructor() {
    this.horizontal = false;

    this.streams = [];

    this.onClickStreamObject = new EventEmitter<StreamObjectDto>();
  }

}
