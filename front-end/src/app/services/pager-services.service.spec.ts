import { TestBed, inject } from '@angular/core/testing';

import { PagerServicesService } from './pager-services.service';

describe('PagerServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagerServicesService]
    });
  });

  it('should be created', inject([PagerServicesService], (service: PagerServicesService) => {
    expect(service).toBeTruthy();
  }));
});
