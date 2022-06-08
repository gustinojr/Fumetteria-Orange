import { TestBed } from '@angular/core/testing';

import { ListaFumettiService } from './lista-fumetti.service';

describe('ListaFumettiService', () => {
  let service: ListaFumettiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFumettiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
