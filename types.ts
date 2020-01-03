// Boolean
let thisIsABool: boolean = false;

// Number
let myNum: number = 1;

// Text, string
let myName: string = 'bud';

// Arrays
let count: number[] = [1, 2, 3, 4];
let newCount: Array<number> = [1, 2, 3, 4];

// variant (any)
let anything: any = 4;
anything = 'text';
anything = false;

// Returning nothing
function greeter(name: string): void {
  console.log('Hello, ' + name);
}

// Enums
let joystickStatus = 1;

enum Directions {
  Up,
  Down,
  Left,
  Right
} // compiles to Up=0, Down=1,...
if (joystickStatus === Directions.Left) {
  // move player to the left
}
