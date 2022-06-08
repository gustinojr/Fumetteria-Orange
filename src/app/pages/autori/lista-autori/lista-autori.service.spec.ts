import { TestBed } from '@angular/core/testing';

import { ListaAutoriService } from './lista-autori.service';

describe('ListaAutoriService', () => {
  let service: ListaAutoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAutoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
