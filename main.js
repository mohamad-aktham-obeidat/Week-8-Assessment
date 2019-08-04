console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}


2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}

3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE    
  sum = (x, y) => {
  return x+y;
}
console.log(sum(2,2));
     

//2) WRITE YOUR CODE UNDER THIS LINE 
consoleReturn = (x,y) => {
  console.log(x)
  return y
}
console.log(consoleReturn('Here is Y: ', 5));
        

//3) WRITE YOUR CODE UNDER THIS LINE 
{
let name="Alex"
let age=25
let result=`My name is: ${name} and my age is: ${age}`
}
console.log(result);
        

//4) WRITE YOUR CODE UNDER THIS LINE  
let food="Fried Chicken"
let color="Blue"
let object={
  food,
  color,
}
console.log(object.food);
console.log(object.color);
       

//5) WRITE YOUR CODE UNDER THIS LINE         

let object2={
  multi(a,b){
    return a * b
  }
}
console.log(object2.multi(3, 3));






/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  OS:'Windows',
  RAM:16,
  CPU:'I7',
  doubleRAM:f(){}
}
*/

// WRITE YOUR CODE UNDER THIS LINE
class Computer{

  constructor(OS, RAM, CPU){
    this.OS = OS;
    this.RAM = RAM;
    this.CPU = CPU;
  }
  doubleRAM = () => this.RAM * 2;
}

const Computer1 = new Computer('Windows',16,'I7');
Computer1.doubleRAM(); 
console.log(Computer1);

const Computer2 = new Computer('Linux',8,'I5'); 
Computer2.doubleRAM(); 
console.log(Computer2);

const Computer3 = new Computer('Mac',4,'I3'); 
Computer3.doubleRAM(); 
console.log(Computer3);








/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
{
  import React, {Component} from 'react';
  import Tasks from './Tasks';

export default class App extends Component {
    state = {
      title: 'ELIZABETH GREENE',
      todos: ['eat', 'eat eat', 'eat again']
    };

    changeTitle() {
      this.title.setMovieState('AGGREGOR ZOLDYCK'); 
    }
    changeTasks(){
      this.todos[0].setState('Watch Movie');
      this.todos[1].setState('Watch REAL MADRID Match');
      this.todos[2].setState('Have Fun With Friends');
    }
    render() {
      return (
        <div>
          <h1>App Component => {this.state.title} </h1>
          <button onClick={this.changeTitle}>Change Title</button>
          <Tasks tasks={this.changeTasks} changeTitleFromChild={this.changeTitle} />
        </div>
      );
    }
  }
}

// Tasks Component
{
  import React, { Component } from 'react';

  export default class Tasks extends Component {
    state = {
      day: "Sat"
    };
    changeDay() {
      this.title.setState('Sun');
    }

    render() {
      return (
        <div>
          <h1>Tasks Component => {this.state.day}</h1>
          <button onClick={this.props.tasks}>Change Tasks State</button>
          <button onClick={this.props.changeTitleFromChild}>Change App State</button>
        </div>
      );
    }
  }
}
