import { TestBed } from '@angular/core/testing';

import { CreaFumettoService } from './crea-fumetto.service';

describe('CreaFumettoService', () => {
  let service: CreaFumettoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaFumettoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
