import { TestBed } from '@angular/core/testing';

import { CreaAutoriService } from './crea-autori.service';

describe('CreaAutoriService', () => {
  let service: CreaAutoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaAutoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
