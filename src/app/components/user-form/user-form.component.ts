import { Component, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { User } from "../../models/user-model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: UntypedFormGroup;
  @Output() formData = new BehaviorSubject(null);
  @Input() user: User;
  @Input() editMode = false;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    if (this.user) {
      this.initEditForm();
    } else {
      this.initEmptyForm()
    }

    this.userForm.valueChanges.subscribe(()=> {
      if(this.userForm.valid){
        this.formData.next(this.userForm.getRawValue())
      } else {
        this.formData.next(null)
      }
    })
  }

  initEmptyForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      realName: ['', Validators.required],
      surname: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  initEditForm() {
    this.userForm = this.fb.group({
      username: [this.user.username, Validators.required],
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],
      realName: [this.user.realName, Validators.required],
      surname: [this.user.surname, Validators.required],
      role: [this.user.role, Validators.required]
    })
  }
}
