abstract class Animal {
  // abstract class means that it can not be instantiated, it is meant to be extended by other classes
  private name: string;

  /**
   *
   */
  constructor(theName: string) {
    this.name = theName;
  }
  walk(distance: number) {
    console.log(
      'Hi, my name is ' + this.name + " and I'm walking " + distance + ' meters'
    );
  }
}

class Snake extends Animal {
  /**
   *
   */
  constructor(theName: string) {
    super(theName); // call Animal constructor with theName passed as arg
  }

  walk(distance: number) {
    console.log("Snakes don't walk");
  }
}
let mySnake = new Snake('Buddy');
mySnake.walk(10);
