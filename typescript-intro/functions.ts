// Optional parameter can be indicated by a default value instead of a ? appended to the parameter name
function greet(firstName: string, lastName: string = 'Smith'): void {
  console.log(`Hello ${firstName} ${lastName}`);
}

greet('Bud', 'Dy');

class Greeter {
  private firstName: string;
  /**
   *
   */
  constructor(firstName: string) {
    this.firstName = firstName;
  }
  sayHello() {
    setTimeout(() => {
      console.log(`Hello ${this.firstName}`);
    }, 500);
  }
}
