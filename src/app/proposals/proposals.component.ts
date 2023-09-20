import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  names = [
    'Marius',
    'Laura',
    'Marvin'
  ];

  texts = [
    '7 months old',
    '7,5 years old',
    '13 years old'
  ]

  images = [
    'assets/img/cats/6.jpg',
    'assets/img/cats/7.jpg',
    'assets/img/cats/8.jpg'
  ]

}
