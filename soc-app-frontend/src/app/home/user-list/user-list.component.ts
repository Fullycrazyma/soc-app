import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  username = 'tom';
  age: 25;

  users;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      }
    )
  }
}
