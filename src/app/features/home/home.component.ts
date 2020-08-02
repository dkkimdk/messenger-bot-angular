import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  passwordValidated = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkPassword(password: string): void {
    console.log(password);
    this.passwordValidated = true;
  }
}
