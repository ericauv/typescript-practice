"use strict";
// Boolean
var thisIsABool = false;
// Number
var myNum = 1;
// Text, string
var myName = 'bud';
// Arrays
var count = [1, 2, 3, 4];
var newCount = [1, 2, 3, 4];
// variant (any)
var anything = 4;
anything = 'text';
anything = false;
// Returning nothing
function greeter(name) {
    console.log('Hello, ' + name);
}
// Enums
var joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {})); // compiles to Up=0, Down=1,...
if (joystickStatus === Directions.Left) {
    // move player to the left
}
