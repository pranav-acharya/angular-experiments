import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
	fruits: String[] = ['Mango', 'Banana', "apple", 'orange', 'ayy'];
	todosUrl = 'https://jsonplaceholder.typicode.com/todos';
	usersUrl = 'https://jsonplaceholder.typicode.com/users'
	getFruits(): String[] {
		return this.fruits;
	}

	getFruitsObservable(): Observable<Todo[]> {
		return this.http.get<Todo[]>(this.todosUrl).pipe(
			tap(t => console.log('fetched todos', t)),
      		catchError(() => console.error)
		);
	}

	getUsersObservable(): Observable<Todo[]> {
		return this.http.get<Todo[]>(this.usersUrl).pipe(
			tap(t => console.log('fetched users', t)),
      		catchError(() => console.error)
		);
	}
  constructor(private http: HttpClient) { }
}
