import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodoItem } from '../Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false

  @Input() item!: ITodoItem;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<ITodoItem>();

  saveItem(title: string) {
    if (!title) return;
    this.editable = false;
    this.item.title = title;
  }

}