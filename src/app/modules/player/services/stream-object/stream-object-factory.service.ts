import { Injectable } from '@angular/core';
import {StreamObjectDto, StreamObjectTypes} from "../../components/stream-object";
import {forEach} from "@angular/router/src/utils/collection";
import {QualityFactory} from "../controls/quality-factory.service";

@Injectable({
  providedIn: 'root'
})
export class StreamObjectFactory {

  constructor(protected qualityFactory: QualityFactory) { }

  public createAndBuildFromArray(streams: Array<Object>): Array<StreamObjectDto> {
    let ret = [];

    streams.forEach((element) => {
      let streamObjectDTO = StreamObjectDto.create();

      if (element['src'] !== undefined) {
        streamObjectDTO.setSrc(element['src']);
      }

      if (element['type'] !== undefined) {
        if (element['type'] === StreamObjectTypes.VIDEO) {
          streamObjectDTO.setType(StreamObjectTypes.VIDEO)
        }

        if (element['type'] === StreamObjectTypes.AUDIO) {
          streamObjectDTO.setType(StreamObjectTypes.AUDIO)
        }

        if (element['type'] === StreamObjectTypes.LIVE) {
          streamObjectDTO.setType(StreamObjectTypes.LIVE)
        }
      }

      if (element['image'] !== undefined && element['image']['src'] !== undefined) {
        streamObjectDTO.setImageUrl(element['image']['src']);
      }

      if (element['labels'] !== undefined) {
        if (element['labels']['artist'] !== undefined) {
          streamObjectDTO.setArtist(element['labels']['artist']);
        }

        if (element['labels']['album'] !== undefined) {
          streamObjectDTO.setAlbum(element['labels']['album']);
        }

        if (element['labels']['name'] !== undefined) {
          streamObjectDTO.setName(element['labels']['name']);
        }
      }

      if (element['quality'] !== undefined) {
        streamObjectDTO.setQualityList(this.qualityFactory.createAndBuildFromArray(element['quality']));
      } else {
        streamObjectDTO.setQualityList([]);
      }

      ret.push(streamObjectDTO);
    });

    return ret;
  }
}
