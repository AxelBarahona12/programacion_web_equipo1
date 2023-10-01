import { TestBed } from '@angular/core/testing';

import { PreguntasfService } from './preguntasf.service';

describe('PreguntasfService', () => {
  let service: PreguntasfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntasfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
