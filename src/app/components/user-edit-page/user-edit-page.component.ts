import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user-model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {
  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  private userId: string;
  protected user: User;
  protected userFormData: User;

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe(user => this.user = user);
  }

  setFormData(data: any) {
    this.userFormData = data;
  }

  saveUser() {
    this.userService.updateUser(this.userId, this.userFormData).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
