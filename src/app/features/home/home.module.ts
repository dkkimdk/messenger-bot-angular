import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './components/messenger/messenger.component';
import { HomeComponent} from './home.component';
import { FormsModule } from '@angular/forms';
import {SharedModule} from './../../shared/shared.module'



@NgModule({
  declarations: [
    MessengerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule { }
