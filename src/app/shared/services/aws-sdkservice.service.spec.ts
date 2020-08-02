import { TestBed } from '@angular/core/testing';

import { AwsSDKServiceService } from './aws-sdkservice.service';

describe('AwsSDKServiceService', () => {
  let service: AwsSDKServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsSDKServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
