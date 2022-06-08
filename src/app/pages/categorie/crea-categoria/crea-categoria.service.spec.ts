import { TestBed } from '@angular/core/testing';

import { CreaCategoriaService } from './crea-categoria.service';

describe('CreaCategoriaService', () => {
  let service: CreaCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
