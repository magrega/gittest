// 3.  использовать только синтаксис es5
// • создайте класс Car : функция, которая принимает 7 аргументов:
//  ◦ name ◦ model ◦ year ◦ color ◦ maxSpeed ◦ fuelCapacity - опциональный параметр, используйте значение 60 по дефолту
//  ◦ fuelConsumption - опциональный параметр, используйте значение 10 по дефолту
//  • напишите getFullName метод класса, который должен возвращать название авто (e.x. name + model)
//  • напишите getAge метод класса, который должен возвращать возраст авто (ТЕКУЩИЙ ГОД - ГОД ВЫПУСКА АВТО)
//  • напишите changeColor метод класса, который должен:
//  ◦ принимать один параметр (color);
//  ◦ если у авто уже есть такой цвет, показывать сообщение с текстом (например - "Авто уже покрашено в красный цвет");
//  ◦ если нет, поменять цвет авто и сообщить об этом пользователю.
//  • напишите calculateWay метод класса, который должен:
//  ◦ принимать 2 аргумента: kilometers и fuel;
//  ◦ прверять если fuel < 10, сообщить пользователю;
//  ◦ посчитать среднее время пути, сообщить пользователю;
//  ◦ проверить, нужна ли дозаправка во время пути и сообщить пользователю (если нужна, то сколько)
//  • создайте 3 дочерних класса, которые буду наследовать от класса Car в ES5 стиле (например: BMW, Lexus, etc. <--- по желанию)
//  • создайте каждому классу уникальные свойства, которые будут присущи только этим уникальным классам (например, пусть все BMW могут быть оснащены панорамной крышей, Lexus могут иметь климат контроль и т.д. (примдумайти свои уникальные свойства))
//  • создайте уникальные методы, которые будут присущи этим дочерним классам (на ваш вкус)
//  • создайте по крайней мере по одной сущности каждого класса
//  • проверьте, как работает ваш код (используйте Chrome Dev Tools для отладки)


function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
};

Car.prototype.getFullName = function () {
    return this.name + " " + this.model;
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
}

Car.prototype.changeColor = function (color) {
    if (color === this.color) {
        console.log("already this color");
    } else {
        console.log("changed color to " + color);
        this.color = color;
    }
};

Car.prototype.calculateWay = function (kilometers, fuel) {
    if (fuel < 10) console.log("Low gas");
    console.log("Time on road: " + kilometers / this.maxSpeed + " hour(s)");

    var refill = kilometers / this.fuelConsumption - fuel;
    refill > 0 ? console.log("You'll need a " + refill + "L refill") : console.log("Don't need a refill");
}

var car = new Car("Mazda", "RX8", 2000, "red", 200);

// car.calculateWay(400, 30);

function BMW(name, model, year, color, maxSpeed, dildoCompartment, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.dildoCompartment = dildoCompartment;
};

BMW.prototype = Object.create(Car.prototype);

BMW.prototype.blastMusic = function () {
    console.log("animals martin garrix is blastin'");
}

var bmw = new BMW("BMW", "M3", 1980, "blue", 180, true);

/////////////////////////////////////////////////////////////

function Lexus(name, model, year, color, maxSpeed, anotherLife, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.anotherLife = anotherLife;
};

Lexus.prototype = Object.create(Car.prototype);

Lexus.prototype.dreamBig = function () {
    console.log("Having a lexus is just... another life...");
}

var lexus = new Lexus("lexus", "LS", 2010, "grey", 150, true);

/////////////////////////////////////////////////////////////

function Lada(name, model, year, color, maxSpeed, brokenDoors, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.brokenDoors = brokenDoors;
};

Lada.prototype = Object.create(Car.prototype);

Lada.prototype.slamDoor = function () {
    console.log("Тебе кабину снести?");
}

var lada = new Lada("Lada", "Largus", 1960, "grey", 150, 4);

bmw.getAge();
lada.getAge();
lexus.getAge();
bmw.blastMusic();
lexus.dreamBig();
lada.slamDoor();