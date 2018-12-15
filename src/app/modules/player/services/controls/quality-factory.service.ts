import { Injectable } from '@angular/core';
import {StreamObjectDto} from "../../components/stream-object";
import {QualityDto} from "../../components/controls";

@Injectable({
  providedIn: 'root'
})
export class QualityFactory {

  constructor() { }

  public createAndBuildFromArray(qualityList: Array<Object>): Array<QualityDto> {
    let ret = [];

    qualityList.forEach((element) => {
      let qualityDTO = QualityDto.create().setName(element['name']).setValue(element['value']);

      ret.push(qualityDTO);
    });

    return ret;
  }
}
