import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.sass']
})
export class MycompComponent implements OnInit {
  myname: String = 'Test Component by pranav';
  fruits = [];
  todos = [];
  getFruits(): void {
	  this.fruits = this.fruitsService.getFruits();
  }

  getTodos(): void {
  	//.subscribe(() => this.goBack());
  	this.fruitsService.getFruitsObservable().subscribe((todos: Todo[]) => {
  		this.todos = todos;
  	})
  }

  constructor(private fruitsService: FruitService) { }

  ngOnInit(): void {
  	this.getFruits();
  	this.getTodos();
  }

}
