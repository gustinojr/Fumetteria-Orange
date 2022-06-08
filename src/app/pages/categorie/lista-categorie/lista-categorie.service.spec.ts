import { TestBed } from '@angular/core/testing';

import { ListaCategorieService } from './lista-categorie.service';

describe('ListaCategorieService', () => {
  let service: ListaCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
