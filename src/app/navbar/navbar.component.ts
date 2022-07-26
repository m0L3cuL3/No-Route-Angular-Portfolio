import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @Output() item_event = new EventEmitter<string>();
  
  // brand title
  brand_title = 'Portfolio'

  // navbar items
  nav_items = [
    'Home',
    'Blog',
    'About Me',
    'Contact Me'
  ]

  renderItem(item: any) {
    this.item_event.emit(item)
  }
}
