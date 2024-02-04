import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user-model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  users: User[];

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users.find(user => user.id === id);
    if (user) {
      const idx = this.users.indexOf(user);
      this.users.splice(idx, 1);
    }
    this.usersService.deleteUser(id).subscribe();
  }
}
