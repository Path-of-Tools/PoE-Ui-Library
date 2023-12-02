import { TestBed } from '@angular/core/testing';

import { PoeUiService } from './poe-ui.service';

describe('PoeUiService', () => {
  let service: PoeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
