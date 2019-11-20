import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventSuggestionService {

  suggestionMap: Map<User, ShowSuggestion[]> = new Map();

  constructor() { }

  addEventSuggestion(user: User, suggestion: ShowSuggestion) {
    const userExists: boolean = this.suggestionMap.has(user);
    if (!userExists) {
      this.suggestionMap.set(user, new Array() as ShowSuggestion[]);
    }
    const userList: ShowSuggestion[] = this.suggestionMap.get(user);
    userList.push(suggestion);
    this.suggestionMap.set(user, userList);
    console.log(this.suggestionMap);
  }

}
