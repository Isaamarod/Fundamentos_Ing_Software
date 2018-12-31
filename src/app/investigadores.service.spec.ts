import { TestBed } from '@angular/core/testing';

import { InvestigadoresService } from './investigadores.service';

describe('InvestigadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestigadoresService = TestBed.get(InvestigadoresService);
    expect(service).toBeTruthy();
  });
});
