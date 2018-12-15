import {StreamObjectTypes} from "./stream-object-types";
import {QualityDto} from "../controls";

export class StreamObjectDto {
  protected _src: string;

  protected _type: StreamObjectTypes;

  protected _imageUrl: string;

  protected _artist: string;

  protected _album: string;

  protected _name: string;

  private _qualityList: Array<QualityDto>;

  static create(): StreamObjectDto {
    return new StreamObjectDto();
  }

  get src(): string {
    return this._src;
  }

  setSrc(value: string) {
    this._src = value;

    return this;
  }

  get type(): StreamObjectTypes {
    return this._type;
  }

  setType(value: StreamObjectTypes) {
    this._type = value;

    return this;
  }

  get artist(): string {
    return this._artist;
  }

  setArtist(value: string) {
    this._artist = value;

    return this;
  }

  get album(): string {
    return this._album;
  }

  setAlbum(value: string) {
    this._album = value;

    return this;
  }

  get name(): string {
    return this._name;
  }

  setName(value: string) {
    this._name = value;

    return this;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  setImageUrl(value: string) {
    this._imageUrl = value;

    return this;
  }

  get qualityList(): Array<QualityDto> {
    return this._qualityList;
  }

  setQualityList(value: Array<QualityDto>) {
    this._qualityList = value;

    return this;
  }
}
