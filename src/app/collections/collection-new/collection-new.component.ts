import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.css']
})
export class CollectionNewComponent implements OnInit {
  public user: User;
  public collectionDetailsCollapsed: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUserById(1)
      .subscribe((user: User) => this.user = user);
  }


}
