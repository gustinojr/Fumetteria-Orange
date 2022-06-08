import { TestBed } from '@angular/core/testing';

import { CreaUtenteService } from './crea-utente.service';

describe('CreaUtenteService', () => {
  let service: CreaUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
