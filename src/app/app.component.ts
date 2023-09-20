import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postTexts = [
    'Hi, my name is Luis and I am here to find new friends.',
    'I love snacks!',
    'I do not really understand what i am doing here. But it is nice :)',
    'Hello, nice to meet you!',
    'I hate human beings...they are only good for giving me snacks!',
    
  ];

  postImages = [
    'assets/img/cats/1.jpg',
    'assets/img/cats/2.jpg',
    'assets/img/cats/3.jpg',
    'assets/img/cats/4.jpg',
    'assets/img/cats/5.jpg',
    'assets/img/cats/6.jpg',
    'assets/img/cats/7.jpg',
    'assets/img/cats/8.jpg',
  ];
}
