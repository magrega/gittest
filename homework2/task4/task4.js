// 4. Используйте только ES6 синтаксис (let, const, arrow functions и т.д.)
//  • проделйте те же шаги как и в ES5 стиле, только с использованием ES6 синтаксиса (используйте ключевые слова extends и super для наследования)

class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    getFullName = () => {
        return this.name + " " + this.model;
    }
    getAge = () => {
        return new Date().getFullYear() - this.year;
    }
    changeColor = () => {
        if (color === this.color) {
            console.log("already this color");
        } else {
            console.log("changed color to " + color);
            this.color = color;
        }
    }
    calculateWay = (kilometers, fuel) => {
        if (fuel < 10) console.log("Low gas");
        console.log("Time on road: " + kilometers / this.maxSpeed + " hour(s)");

        const refill = kilometers / this.fuelConsumption - fuel;
        refill > 0 ? console.log("You'll need a " + refill + "L refill") : console.log("Don't need a refill");
    }

};

const car = new Car("Mazda", "RX8", 2000, "red", 200);

car.calculateWay(400, 30);

// /////////////////////////////////////////////////////////////

class BMW extends Car {
    constructor(name, model, year, color, maxSpeed, dildoCompartment, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.dildoCompartment = dildoCompartment;
    }
    blastMusic = () => {
        console.log("animals martin garrix is blastin'");
    }
};

const bmw = new BMW("BMW", "M3", 1980, "blue", 180, true);
bmw.blastMusic();

// /////////////////////////////////////////////////////////////

class Lexus extends Car {
    constructor(name, model, year, color, maxSpeed, anotherLife, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.anotherLife = anotherLife;
    }
    dreamBig = () => {
        console.log("Having a lexus is just... another life...");
    }
};

const lexus = new Lexus("lexus", "LS", 2010, "grey", 150, true);
lexus.dreamBig();

// /////////////////////////////////////////////////////////////

class Lada extends Car {
    constructor(name, model, year, color, maxSpeed, brokenDoors, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.brokenDoors = brokenDoors;
    }
    slamDoor = () => {
        console.log("Тебе кабину снести?");
    }
};


const lada = new Lada("Lada", "Largus", 1960, "grey", 150, 4);

lada.slamDoor();

bmw.getAge();
lada.getAge();
lexus.getAge();


