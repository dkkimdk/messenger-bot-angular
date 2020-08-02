import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Remind Bot';
  navList: Nav[] = [
    {displayName: 'About', internal: true},
    {displayName: 'Github', internal: false, link: 'https://github.com/dkkimdk'},
    {displayName: 'Linkedin', internal: false, link: 'https://www.linkedin.com/in/david-kim-b21156108/'}
];
}


class Nav {
  displayName: string;
  internal: boolean;
  link?: string;
}
