const a: string = 'Hello'
const b: number[] = [10, 20]
let c: number | null = 10
c = null

enum Colors {
    Blue = 'blue',
    Red = 'red',
    Yellow = 'yellow'
}

console.log(Colors.Red)

type Color = 'blue' | 'red' | 'yellow'

const d: Color = 'blue'

function addition(a: number, b?: number): number {
    return a + (b || 0)
}

const addition2 = (a: number, b: number) => a + b

console.log(addition(10))
console.log(addition2(10, 10))

interface Color2 {
    name: string;
    value: string;
    universe?: string;
    display(): void;
}

const Log = () => {
    return (originalMethod: any, context: ClassMethodDecoratorContext) => {
        console.log(`call ${context.kind} ${String(context.name)}`);

        // On remplace la méthode par cette fonction (normale car this)...
        return function (...args: any[]) {
            console.log('LOG');
            originalMethod.call(this, ...args);
        };
    }
}

class Car {
    private wheel: number = 4;

    constructor(private color: Color2) {
        // this.color = color; // Même chose
    }

    @Log()
    drive() {
        console.log(`my ${this.color} car is driving.`);
        'Hello ' + this.color;
        `Hello ${this.color}, ta phrase etc`;
    }
}

const car = new Car({
    name: 'Red', value: 'red', display: () => console.log(this.value)
});
car.drive()
