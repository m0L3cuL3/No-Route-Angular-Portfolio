import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AppComponent {
  @ViewChild('navbarchild') navbarchild!: NavbarComponent
  
  title = 'Home'

  showTitle($event: string) {
    this.title = $event
  }

  clicked(){
    this.navbarchild.renderItem(this.title)
  }
}
