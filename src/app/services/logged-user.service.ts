import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  itemValue = new Subject<string>();

  constructor() { }

  setCurrentUser(user: string) {
    this.itemValue.next(user);
    localStorage.setItem('loggedUser', user);
  }
  
  getCurrentUser() {
    return localStorage.getItem('loggedUser');
  }

  logoutUser(user: string) {
    return localStorage.removeItem('loggedUser');
  }

}
