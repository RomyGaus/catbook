import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
  @Input() name:string = 'Romy';
  @Input() img:string = '/assets/img/cats/0.jpg';
  @Input() description:string = '4 years old';
  @Input() canFollow:boolean = true;

  constructor(public fs: FriendService) { }
}
