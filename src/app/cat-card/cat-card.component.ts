import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input() text: string = '';
  @Input() img: string = '';

  constructor() { }
}
