import { TestBed } from '@angular/core/testing';

import { AddDeviceService } from './add-device.service';

describe('AddDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDeviceService = TestBed.get(AddDeviceService);
    expect(service).toBeTruthy();
  });
});
