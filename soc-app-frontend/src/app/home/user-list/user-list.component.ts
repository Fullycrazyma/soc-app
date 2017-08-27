import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/user.service';
import { User } from '../../shared/service/user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users: Array<User>;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(
            (users) => {
                this.users = users;
            }
        );
    }

    createUser() {
        const lastUserId = this.users === undefined || this.users.length === 0
            ? 0 : +this.users[this.users.length - 1].id;

        const user = new User(
            '',
            'Name' + (lastUserId + 1).toString(),
            'Password' + (lastUserId + 1).toString(),
            'Email' + (lastUserId + 1).toString() + '@test.com',
            'FirstName' + (lastUserId + 1).toString(),
            'LastName' + (lastUserId + 1).toString(),
            'USER'
        );

        this.userService.addUser(user).subscribe(
            () => { this.getUsers(); }
        );
    }
}
