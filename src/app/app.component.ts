import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
//import './app-state.ts';

interface AppState{
	counter: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<any>;
  constructor(private store: Store<AppState>) {
  	this.counter = store.select('counter');
  }
  increment() {
  	this.store.dispatch({ type: INCREMENT });
  }
  decrement() {
  	this.store.dispatch({ type: DECREMENT });
  }
  reset() {
  	this.store.dispatch({ type: RESET });
  }
}
