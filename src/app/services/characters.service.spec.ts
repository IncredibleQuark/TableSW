import { TestBed, inject } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService]
    });
  });

  it('should be created', inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
});
