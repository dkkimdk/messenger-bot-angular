import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsSDKServiceService } from './services/aws-sdkservice.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AwsSDKServiceService
  ]
})
export class SharedModule { }
