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

  mockUser1: User = {
    username: "PatriciaMeireles",
    password: "patty",
    email: "patty_diva@gmail.com",
    birthday: new Date("1990/12/07"),
    profilePic: "assets/patricia.png",
    tastes: ['Ópera', 'Museus', 'Teatros']

  }

  mockUser2: User = {
    username: "Rosinha",
    password: "rosinha",
    email: "rosinha@gmail.com",
    birthday: new Date("1980/02/17"),
    profilePic: "assets/rosinha.png",
    tastes: ['Ópera', 'Teatros']

  }

  mockUser3: User = {
    username: "Tobi98",
    password: "tobi98",
    email: "tobi@gmail.com",
    birthday: new Date("1990/03/07"),
    profilePic: "assets/tobi98.png",
    tastes: ['Rock', 'Teatros']

  }

  mockUser4: User = {
    username: "MeirelesFofo",
    password: "meirelesfofo",
    email: "fofofofinho@gmail.com",
    birthday: new Date("1994/03/05"),
    profilePic: "assets/meirelesfofo.png",
    tastes: ['Rap', 'Museus']

  }

  userList: User[] = [this.admin, this.mockUser1, this.mockUser2, this.mockUser3, this.mockUser4];

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
