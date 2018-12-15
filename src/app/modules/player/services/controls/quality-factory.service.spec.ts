import { TestBed } from '@angular/core/testing';

import { QualityFactory } from './quality-factory.service';

describe('QualityFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualityFactory = TestBed.get(QualityFactory);
    expect(service).toBeTruthy();
  });
});
