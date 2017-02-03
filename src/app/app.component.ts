import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! Yeah! Try again';
  
  public model = {
    name: 'Tudor',
    todos: [
      { name: 'Buy Flowers', state: false },
      { name: 'Buy Shampoo', state: false },
      { name: 'Buy Milk', state: true },
      { name: 'Buy Candy', state: false },
      { name: 'Take over the world', state: false },
    ]
  };

  incompleteTodos() : number {
    let count: number = 0;
    for(let i=0; i < this.model.todos.length; i++) {
      if (!this.model.todos[i].state) {
        count++;
      }
    }
    return count;
  }

}
