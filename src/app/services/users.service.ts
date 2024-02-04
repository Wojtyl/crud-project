import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user-model";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get<{[id: string]: User}>(`https://crud-angular-80deb-default-rtdb.europe-west1.firebasedatabase.app/users.json`).pipe(
      map(users => {
        const userMap: User[]  = [];
        Object.keys(users).forEach(id => {
          userMap.push({ ...users[id], id});
        })
        return userMap;
      })
    );
  }

  public getUserById(id: string) {
    return this.http.get<User>(`https://crud-angular-80deb-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`);
  }

  public createUser(user: User) {
    return this.http.post('https://crud-angular-80deb-default-rtdb.europe-west1.firebasedatabase.app/users.json', user);
  }

  public deleteUser(id: string) {
    return this.http.delete(`https://crud-angular-80deb-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`);
  }

  public updateUser(id: string, userFormData: User) {
    return this.http.patch(`https://crud-angular-80deb-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`, userFormData);
  }
}
