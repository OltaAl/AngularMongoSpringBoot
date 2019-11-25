import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ListAllDevicesComponent } from './list-all-devices/list-all-devices.component';
import { AddDeviceService } from './shared/add-device.service';

@NgModule({
  declarations: [
    AppComponent,
    AddDeviceComponent,
    ListAllDevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AddDeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
