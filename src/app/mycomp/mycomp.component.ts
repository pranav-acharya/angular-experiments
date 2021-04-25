import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Todo } from '../services/todo';
import { createSelector, Store } from '@ngrx/store';
import { State } from './mycomp.reducer';
import { fetchUsers} from './mycomp.actions';
import { StoreModule } from '@ngrx/store';

export const selectUsers = (state: State) => state.users;
export const selectUsersFetching = (state: any) => {
  console.log('Current state', state);
   return state.mycompState.fetchingUsers;
} ;
export const selectUserFetching = (state: State) => state.fetchingUser;


@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.sass']
})
export class MycompComponent implements OnInit {
  myname: String = 'Test Component by pranav';
  fruits = [];
  todos = [];
  users = [];
  usersLoading = false;
  userLoading = false;

  getFruits(): void {
	  this.fruits = this.fruitsService.getFruits();
  }

  getTodos(): void {
  	//.subscribe(() => this.goBack());
  	this.fruitsService.getFruitsObservable().subscribe((todos: Todo[]) => {
  		this.todos = todos;
  	})
  }

  constructor(private fruitsService: FruitService, private store: Store) { }

  toggleLoading(): void {
  	console.log("toggle loading called");
  	this.store.dispatch(fetchUsers());
  }

  ngOnInit(): void {
  	this.store.select(selectUsersFetching).subscribe((res) => {
  		console.log('from store', res);
  		this.usersLoading = res;
  	});
  	this.getFruits();
  	this.getTodos();
  }

}
