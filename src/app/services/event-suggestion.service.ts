import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EventSuggestionService {
 
  suggestionMap: Map<String, ShowSuggestion[]> = new Map();
  

  constructor(private authService: AuthenticationService) {
   }

  addEventSuggestion(username: String, suggestion: ShowSuggestion) {
    const userExists: boolean = this.suggestionMap.has(username);
    if (!userExists) {
      this.suggestionMap.set(username, new Array() as ShowSuggestion[]);
    }
    const userList: ShowSuggestion[] = this.suggestionMap.get(username);
    userList.push(suggestion);
    this.suggestionMap.set(username, userList);
    console.log(this.suggestionMap);
  }

  getSuggestionsByUsername(username: string) {
    return this.suggestionMap.get(username);
  } 

}
