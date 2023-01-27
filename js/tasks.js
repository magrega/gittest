// Task 1.
// Поменяйте значение переменных местами не создавая дополнительной переменной:

//     let a = 4
//     let b = 3

let a = 4;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

// [a, b] = [b, a];
console.log(a);
console.log(b);

b = [a, a = b][0];

// console.log(a, b);

// Task 2.
// Создать 3 переменные разных типов и вывести в консоль для каждой из них содержание следующего типа:    

// Variable: <имя_переменной> has type => <тип_переменной>

let one = "text";
let two = 12;
let three = false;

//    one = {one};
//    two = {two};
//    three = {three};

//    console.log("Variable: " + Object.keys(one)[0] + " has type " + typeof one.one);
//    console.log("Variable: " + Object.keys(two)[0] + " has type " + typeof two.two);
//    console.log("Variable: " + Object.keys(three)[0] + " has type " + typeof three.three);


function logger(...theArgs) {
    theArgs.map(item => console.log("Variable: " + item + " has type " + typeof item));
}

// logger(one, two, three);

// Task 3.
// Создать две переменных числовых, сложить их и вывести их сумму в консоль в виде как будто это были строки:

// Пример: а = 2 в = 4 вывод в консоль: 24. 
// Help: toString()

let num1 = 2,
    num2 = 4;

function conc(num1, num2) {
    return num1.toString() + num2.toString();
}

// console.log(conc(num1, num2));

// Task 4.
// Запросить у пользователя имя и возраст и вывести их в консоль.

// console.log(prompt("Name?"));
// console.log(prompt("age?"));

// Task 5.
// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос Сколько отнять/прибавить/умножить/разделить от предыдущего результата?
// 3. По окончании вывести пользователю alert, содержащий формулу и результат например: ((((6 + 10) - 5) * 20) / 2 = 110).

// let prompts = {
//     base: Number(prompt("Punch in a number")),
//     addition: Number(prompt("how much to add?")),
//     detraction: Number(prompt("how much to detract?")),
//     multiplication: Number(prompt("multiply by what?")),
//     division: Number(prompt("divide by what?")),
// };

// prompts.result = ((prompts.base + prompts.addition) - prompts.detraction) * prompts.multiplication / prompts.division;

// alert(`((((${prompts.base} + ${prompts.addition}) - ${prompts.detraction}) * ${prompts.multiplication}) / ${prompts.division}) = ${prompts.result}`);

//     Task 6.
// Написать программу, которая выполняет следующие операции:

//     1. Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - "Попей пивка". 
//     2. Если меньше, то выводит сообщение - "Пей колу". 
//     3. Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори".

// let age = +prompt("age?");

// age > 18 ? alert("Have a beer") : alert("have a coke");

// if (age >= 16 && age <= 18) alert("take a puff");

//      Task 7.
//      Написать перебор от 1-20, где выведутся все числа кратные трём.
//      Help: для вычисления кратности обратите внимание на оператор %

// for (let i = 1; i <= 20; i++) {

//     if (i % 3 === 0) console.log(i);

// }

// Task 8.
// При открытии страницы поприветствовать пользователя и спросить его имя, далее обратившись по имени, спросить как дела.
// Далее надо спросить, что он кушал на обед, после его ответа, надо ему вывести сообщение о том, 
// что "К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки"
// Далее попрощаться с пользователем и пользователь также должен попрощаться. В консоль вывести диалог формата:
//             - R
//             - Василий
//             - Как Василий Ваши дела?
//             - Пока не родила
//             - Чем потчевал сегодня барин?
//             - Котлетки с пюрешкой
//             - К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....
//             - Пока бездушная машина
// let name = prompt("Name?");
// prompt("How have you been doing, " + name + "?");
// prompt("What'd you have for dinner?");
// prompt("I'm a robot and don't eat, I'm afraid, so tastes of human is unknown to me. Farewell...");

//     Task 9.
// Написать цикл-перебор (for), в котором будут выводится все числа кратные 5 или 2 в заданном диапазоне, запрошенном у пользователя.


// let min = prompt("min?"),
//     max = prompt("max?");

// for (let i = min; i <= max; i++) {

//     if (i % 2 === 0 || i % 5 === 0) console.log(i);
// }

// Task 10
// Написать программу которая запрашивает у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Ffffzzz
//     2. Если число делится без остатка на 3 выводим сообшение Bbbzzzz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FfffzzzBbbzzzz

let numQuery = prompt("num?");

if (numQuery % 3 === 0 && numQuery % 5 === 0) {
    console.log("FfffzzzBbbzzzz");
} else if (numQuery % 3 === 0) {
    console.log("Bbbzzzz");
} else if (numQuery % 5 === 0) {
    console.log("Ffffzzz");
}