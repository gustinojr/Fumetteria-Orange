import { TestBed } from '@angular/core/testing';

import { ListaUtentiService } from './lista-utenti.service';

describe('ListaUtentiService', () => {
  let service: ListaUtentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaUtentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
