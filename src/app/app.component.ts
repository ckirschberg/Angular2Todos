import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1> Hello, I am a component</h1>
  // `,
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

  warningLevel() : string {
    // If no incomplete items => none
    // If > 0 and < 3 items => few
    // If > 3 items => many
    let incomplete = this.incompleteTodos();
    if (incomplete === 0) {
      return "none";
    }
    if (incomplete > 0 && incomplete < 3) {
      return "few";
    }
    
    return "many"
  }
  public addTodo(userText: string) : void {
    this.model.todos.push(
      {name: userText, state: false}
    );
  }

   incompleteTodos() : number {
    let count: number = 0;
    for(let i=0; i < this.model.todos.length; i++) {
      if (!this.model.todos[i].state) {
        count++;
      }
    }
    console.log(count);
    return count;
  }

}
