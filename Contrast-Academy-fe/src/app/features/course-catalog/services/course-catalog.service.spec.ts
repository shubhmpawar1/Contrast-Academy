import { TestBed } from '@angular/core/testing';

import { CourseCatalogService } from './course-catalog.service';

describe('CourseCatalogService', () => {
  let service: CourseCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
