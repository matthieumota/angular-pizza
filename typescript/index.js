var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const a = 'Hello';
const b = [10, 20];
let c = 10;
c = null;
var Colors;
(function (Colors) {
    Colors["Blue"] = "blue";
    Colors["Red"] = "red";
    Colors["Yellow"] = "yellow";
})(Colors || (Colors = {}));
console.log(Colors.Red);
const d = 'blue';
function addition(a, b) {
    return a + (b || 0);
}
const addition2 = (a, b) => a + b;
console.log(addition(10));
console.log(addition2(10, 10));
const Log = () => {
    return (originalMethod, context) => {
        console.log(`call ${context.kind} ${String(context.name)}`);
        // On remplace la méthode par cette fonction (normale car this)...
        return function (...args) {
            console.log('LOG');
            originalMethod.call(this, ...args);
        };
    };
};
class Car {
    color;
    wheel = 4;
    constructor(color) {
        this.color = color;
        // this.color = color; // Même chose
    }
    drive() {
        console.log(`my ${this.color} car is driving.`);
        'Hello ' + this.color;
        `Hello ${this.color}, ta phrase etc`;
    }
}
__decorate([
    Log()
], Car.prototype, "drive", null);
const car = new Car({
    name: 'Red', value: 'red', display: () => console.log(this.value)
});
car.drive();
