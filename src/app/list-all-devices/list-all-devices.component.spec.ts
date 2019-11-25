import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllDevicesComponent } from './list-all-devices.component';

describe('ListAllDevicesComponent', () => {
  let component: ListAllDevicesComponent;
  let fixture: ComponentFixture<ListAllDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
