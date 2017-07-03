import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'op-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {

  @Input('avatarImage') avatarImageLink: string = '';

  avatarPlaceholder: string = '../assets/images/avatar-placeholder.png';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!this.avatarImageLink){
      this.avatarImageLink = this.avatarPlaceholder;
    }
  }

}
