import { TestBed } from '@angular/core/testing';

import { DadosCalculadoraService } from './dados-calculadora.service';

describe('DadosCalculadoraServiceService', () => {
  let service: DadosCalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
