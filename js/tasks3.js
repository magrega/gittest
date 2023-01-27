// 1. Удалить ключ из обьекта

let obj = {
    name: 'John',
    age: 19,
    isHappy: true
};

delete obj.name;

// 2 Проверить есть ли в обьекте определенный ключ и если есть вывести true
// console.log(obj.hasOwnProperty('age'));

// 3 Дан объект. Вывести в консоль сначала все ключи, потом значения ключей обьекта.

let obj2 = {
    name: 'John',
    age: 19,
    isHappy: true
};

// Вариант 1
// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));

// Вариант 2
// for (key in obj2) {
//     console.log(key);
// }
// for (key in obj2) {
//     console.log(obj2[key]);
// }

// 4 Дан обьект. Вывести в консоль слово красный и green
let obj3 = {
    'ru pum pu ru rum': ['голубой', 'красный', 'зеленый'],
    'la la la la la': ['blue', 'red', 'green'],
};
// console.log(Object.values(obj3)[0][1]);
// console.log(Object.values(obj3)[1][2]);

// 5 Дан обьект. Вывести максимальную зарплату сотрудника.

    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }

// console.log(Object.values(salaries).sort((num1, num2) => num2 - num1)[0]);

// 6 Создать валидатор, запросить у пользователя логин и пароль. Далее попросить юзера залогиниться поочередно запросив, ввести данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать. Далее записать эти данные в обьект и поместить их в нужные ключи, и если пользователь ввел все верно вывести ключи в консоль.

// validate();

// function validate() {
//     let login = prompt("Create login");
//     let pass = prompt("Create pass");

//     let loginCheck = prompt("Enter login");
//     let passCheck = prompt("Enter password");

//     if (login === loginCheck && pass === passCheck) {
//         alert("Welcome");
//         let userCred = {};
//         userCred.login = login;
//         userCred.pass = pass;
//         console.log(userCred);
//     } else {
//         alert("Wrong credentials");
//     }
// }

// 7 Есть массив объектов
// Разделить его на совершеннолетних и несовершеннолетних. Для совершеннолетних людей узнать профессию у пользователя, обратившись к нему по имени и добавить данный ключ в обьект, после чего вывести результат.

// let persons = [
//     {id: 10, name: 'Vasya', age: 28},
//     {id: 11, name: 'Kolya', age: 16, parentId: 14},
//     {id: 12, name: 'Anna', age: 37},
//     {id: 13, name: 'Zoya', age: 9, parentId: 12},
//     {id: 14, name: 'Arkadiy', age: 45},
// ];

// const underage = [];
// const adult = [];

// persons.map(item => {
//     if (item.age >= 18) {
//         item.job = prompt(`Hey, ${item.name}, what do you do?`);
//         adult.push(item);
//     } else {
//         underage.push(item);
//     }

// });

// console.log(underage);
// console.log(adult);

// 8*. Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

const words = {
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
}

let count = '3:9';
function verbalize(count) {
    return words[count.split(':')[0]] + ":" + words[count.split(':')[1]] 
}
console.log(verbalize(count));