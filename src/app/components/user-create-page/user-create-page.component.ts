import { Component } from '@angular/core';
import { User } from "../../models/user-model";
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent {

  constructor(private userService: UsersService, private router: Router) {
  }

  userFormData: User;
  setFormData(data: any) {
    console.log(data)
    this.userFormData = data;
  }

  saveUser() {
    this.userService.createUser(this.userFormData).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
