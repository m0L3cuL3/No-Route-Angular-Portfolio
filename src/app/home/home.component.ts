import { Component } from '@angular/core';
import { ITodoItem } from '../Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Item:ITodoItem[] = [
    { title: 'My Item 1', priority: 'high', status: false },
    { title: 'My Item 2', priority: 'low', status: false },
    { title: 'My Item 3', priority: 'medium', status: true },
    { title: 'My Item 4', priority: 'high', status: false },
    { title: 'My Item 5', priority: 'high', status: false },
    { title: 'My Item 6', priority: 'high', status: false },
    { title: 'My Item 7', priority: 'low', status: false },
    { title: 'My Item 8', priority: 'medium', status: false },
    { title: 'My Item 9', priority: 'low', status: false }
  ]

  addItem(title: string){
    this.Item.unshift({
      title,
      priority: 'low',
      status: false
    })
  }

  remove(todo: { title: string, priority: string; status: boolean; }) {
    console.log('what?')
    this.Item.splice(this.Item.indexOf(todo), 1);
  }

}
