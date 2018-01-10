import { TestBed, inject } from '@angular/core/testing';

import { CocktaildbService } from './cocktaildb.service';

describe('CocktaildbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CocktaildbService]
    });
  });

  it('should be created', inject([CocktaildbService], (service: CocktaildbService) => {
    expect(service).toBeTruthy();
  }));
});
