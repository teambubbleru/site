import { TestBed } from '@angular/core/testing';

import { StreamObjectFactory } from './stream-object-factory.service';

describe('FactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamObjectFactory = TestBed.get(StreamObjectFactory);
    expect(service).toBeTruthy();
  });
});
