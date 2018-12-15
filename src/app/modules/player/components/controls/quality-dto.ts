export class QualityDto {
  protected _name: string;

  protected _value: string | number;

  static create(): QualityDto {
    return new QualityDto();
  }

  get name(): string {
    return this._name;
  }

  setName(value: string) {
    this._name = value;

    return this;
  }

  get value(): string | number {
    return this._value;
  }

  setValue(value: string | number) {
    this._value = value;

    return this;
  }
}