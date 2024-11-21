import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private mockUsers: User[] = [
  {id: 1, name: 'John', email: 'Jogn@gmai.com'},
  {id: 2, name: 'Amy', email: 'Jogn@gmai.com'},
  {id: 3, name: 'Greg', email: 'Jogn@gmai.com'}
];

  getUsers(): Observable<User[]>{
    return of(this.mockUsers)
  }
}
