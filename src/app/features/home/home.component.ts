import { Component, OnInit } from '@angular/core';
import {PasswordServiceService} from './../../shared/services/password-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  passwordValidated = false;

  constructor(private passwordService: PasswordServiceService) { }

  ngOnInit(): void {
  }

  checkPassword(password: string): void {
    console.log(password);
    this.passwordService.sendMessage(password).subscribe(
      res => {
        console.log(res);
        this.passwordValidated = true;
      }
    );
  }
}
