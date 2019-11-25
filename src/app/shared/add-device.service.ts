import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class AddDeviceService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    deviceName: new FormControl('', Validators.required),
    deviceLocation: new FormControl('', Validators.required),
    deviceLimit: new FormControl('')

  });
}
