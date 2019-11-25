import { Component, OnInit } from '@angular/core';
import { AddDeviceService } from '../shared/add-device.service';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor(private addDeviceService: AddDeviceService) { }
  submitted: boolean;
  formControls = this.addDeviceService.form.controls;
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;

    if (this.addDeviceService.form.valid) {
      //if (this.addDeviceService.form.get('$key').value == null)
      //insert
      this.submitted = true;
    }
    
  }

}
