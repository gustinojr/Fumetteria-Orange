import { TestBed } from '@angular/core/testing';

import { BenvenutoService } from './benvenuto.service';

describe('BenvenutoService', () => {
  let service: BenvenutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenvenutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
