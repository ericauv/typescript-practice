"use strict";
// Optional parameter can be indicated by a default value instead of a ? appended to the parameter name
function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    console.log("Hello " + firstName + " " + lastName);
}
greet('Bud', 'Dy');
var Greeter = /** @class */ (function () {
    /**
     *
     */
    function Greeter(firstName) {
        this.firstName = firstName;
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello " + _this.firstName);
        }, 500);
    };
    return Greeter;
}());
