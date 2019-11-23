import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  admin: User = {
    username: "admin",
    password: "admin",
    email: "admin@admin.pt",
    birthday: new Date("1990/10/02"),
    profilePic: "assets/ava.png",
    tastes: ['Rap']
  }

  userList: User[] = [this.admin];

  constructor() {
  }

  authenticate(username: string, password: string): boolean {
    const result: User[] = this.userList.filter(u => u.username == username && u.password == password);
    if (result.length > 0) {
      return true;
    }
    return false;
  }

  register(user: User): void {
    this.userList.push(user);
    //localStorage.setItem('registeredUsers', JSON.stringify(this.userList));
  }

  passwordConfirmed(password: string, passwordConfirmation: string): boolean {
    if (password == passwordConfirmation) {
      return true;
    }
    return false;
  }


  getUser(username: string): User {
    const user: User = this.userList.find(user => user.username == username);
    return user;
  }

}
