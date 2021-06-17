import { TestBed, inject } from '@angular/core/testing';

import { StudioService } from './studio.service';

describe('StudyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudioService]
    });
  });

  it('should be created', inject([StudioService], (service: StudioService) => {
    expect(service).toBeTruthy();
  }));
});
