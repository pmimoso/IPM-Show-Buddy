import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userList: User[] = [];

  constructor() {
  }

  passwordConfirmed(password: string, passwordConfirmation: string): boolean {
    if (password == passwordConfirmation) {
      return true;
    }
    return false;
  }


  authenticate(user: User): boolean {
    const result: User[] = this.userList.filter(u => u.username == user.username && u.password == user.password);
    if (result.length > 0) {
      return true;
    }
    return false;
  }

  register(user: User): void {
    this.userList.push(user);
    //localStorage.setItem('registeredUsers', JSON.stringify(this.userList));
    //console.log(this.userList);
  }



}
