import { TestBed, inject } from '@angular/core/testing';

import { AgendaApiService } from './agenda-api.service';

describe('AgendaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendaApiService]
    });
  });

  it('should be created', inject([AgendaApiService], (service: AgendaApiService) => {
    expect(service).toBeTruthy();
  }));
});
