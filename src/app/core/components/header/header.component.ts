import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() navList: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.navList);
    console.log(this.title);
    }

}


