import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsSDKServiceService } from './services/aws-sdkservice.service';
import { HttpClientModule } from '@angular/common/http';
import { PasswordServiceService} from './services/password-service.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AwsSDKServiceService,
    PasswordServiceService
  ]
})
export class SharedModule { }
