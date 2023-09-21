import { TestBed } from '@angular/core/testing';

import { PreguntasFService } from './preguntas-f.service';

describe('PreguntasFService', () => {
  let service: PreguntasFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntasFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
