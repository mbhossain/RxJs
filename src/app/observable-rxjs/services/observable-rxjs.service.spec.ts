import { TestBed } from '@angular/core/testing';

import { ObservableRxjsService } from './observable-rxjs.service';

describe('ObservableRxjsService', () => {
  let service: ObservableRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
