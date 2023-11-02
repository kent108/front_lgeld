import { TestBed } from '@angular/core/testing';

import { pictureService } from './picture.service';

describe('PictureService', () => {
  let service: pictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
