import { TestBed } from '@angular/core/testing';

import { KohetsLibService } from './kohets-lib.service';

describe('KohetsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KohetsLibService = TestBed.get(KohetsLibService);
    expect(service).toBeTruthy();
  });
});
