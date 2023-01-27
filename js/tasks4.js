// 1 Lets go
//  • Напишите программу для вычисления общей стоимости покупки телефона. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов до тех пор, пока сумма покупки не превысит ваш мысленный предел трат.
//  • После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
//  • Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
//  • Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара» и «предела трат», также как и переменную для вашего «баланса банковского счета».
//  • Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
//  • Бонусная задача: Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

// const TAX = 0.13;
// const PHONE_PRICE = 4000;
// const ACCESSORIES_PRICE = 500;
// const MAX_EXPENDITURE = 6000;

// let balance = +prompt("How much are you willing to spend?", 18000);

// let total = 0;

// while (balance) {
//     if (confirm(`Wanna buy phone for ${PHONE_PRICE}?`)) total += PHONE_PRICE;

//     while (total < MAX_EXPENDITURE) {
//     if (confirm(`Wanna buy accessories for ${ACCESSORIES_PRICE}?`)) {
//         total += ACCESSORIES_PRICE;
//     } else {
//         break;
//     }
//     }

//     let isGonnaBuy = confirm(`Your total is ${formatPrice(addTax(total))} including taxes. Confirm purchase?`);
//     let canAfford = balance - addTax(total) >= 0 ? true : false;

//     if (isGonnaBuy && canAfford) {
//         balance -= addTax(total);
//     } else if (!canAfford) {
//         alert(`Can't afford. Your balance is ${formatPrice(balance)} when total is ${formatPrice(addTax(total))}`);
//         break;
//     } else if (!isGonnaBuy) {
//         alert("didn't buy");
//     }

//     alert(`Your balance is ${formatPrice(balance)}`);
//     total = 0;
// }


// function formatPrice(price) {
//     return price.toFixed(2) + " RUB";
// }

// function addTax(price) {
//     return price + price * TAX;
// }

// 2 Написать функцию, которая принимает в виде параметров число и коэффициент, в зависимости от значения первого параметра вы столько раз добавите числа в массив (Узнать у пользователя). С помощью коэффициента увеличите или уменьшите значения в массиве.(Узнать у пользователя) В консоль вывести 2 массива, до и после применения коэффициента.

function makeArray(num, coef) {
    const numArr = [];
    for (let i = 0; i < num; i++) {
        numArr.push(+prompt("What num?"));     
    }

    console.log(numArr);
    console.log(numArr.map(item => confirm("ok - Multiply, cancel - divide") ? item * coef : item / coef));
}

// makeArray(3, 2);

// 3 Написать функцию которая возвращает строку обрезанную в зависимости от переданных в нее значений от и до, здесь Вам нужно почитать про работу slice() или substring() для строк.

function cut(string, from, to) {
    return string.slice(from, to);
}

function mySlice(string, from, to) {
    let result ='';

    for (let i = from; i < to; i++) {
        result += string[i];   
    }
    return result;
}

// console.log(mySlice("12345678", 1, 5));
// console.log(cut("12345678", 1, 5));

// 4 Дан обьект: Написать метод для объекта family который вернёт самого старого члена семьи и добавит его в объект в качестве нового свойства.

// const family = {
//     amount: 5,
//     familyMembers: [
//         {name: 'Borya', age: 15},
//         {name: 'Tolya', age: 54},
//         {name: 'Anjela', age: 45},
//         {name: 'Snejana', age: 14},
//         {name: 'Gavriil', age: 24},
//     ],
//     findOld: function() {
//         family.theOldest = this.familyMembers.sort((num1, num2) => num2.age - num1.age)[0];
//     }
// };

// family.findOld();
// console.log(family.theOldest);

// 5 --- Directions Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side! --- 

function step(steps) {
    const string = [];

    for (let i = 0; i < steps; i++) {
        string.push(" ");
    }

    for (let i = 0; i < steps; i++) {
        string.unshift("#");
        string.pop();
        console.log(string.join(''));
    }
}

step(10);

// 6 Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.

// function _if(bool, func1, func2) {

//     bool ? func1() : func2();
// }

// function yes() {
//     console.log("YES!");
// }

// function no() {
//     console.log("NO!");
// }

// _if(true, yes, no);

// 7 Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//     hello "john"   => "Hello, John!"
//     hello "aliCE"  => "Hello, Alice!"
//     hello          => "Hello, World!" # name not given
//     hello ''       => "Hello, World!" # name is an empty String

// function greeting(string) {
//     if (string === '' || string === undefined) return `Hello, World`;
//     const name = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();


//     return `Hello, ${name}`;
// }

// console.log(greeting('aliCE'));
// console.log(greeting('john'));
// console.log(greeting(''));
// console.log(greeting());

// 8 Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

// function breakChocolate(n,m) {
//     if (n * m - 1 > 0) return n * m - 1;

//     return 0;
//   }

//   console.log(breakChocolate(2, 6));

// 9 The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Example Input
//     [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example Output
//     ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// const members =  [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
// const memberships = [];

// members.forEach(item => item[0] >= 55 && item[1] > 7 ? memberships.push("Senior") : memberships.push("Open"));

// console.log(memberships);

// 10 Given two integers a and b,o which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Examples
//     GetSum(1, 0) == 1   // 1 + 0 = 1
//     GetSum(1, 2) == 3   // 1 + 2 = 3
//     GetSum(0, 1) == 1   // 0 + 1 = 1
//     GetSum(1, 1) == 1   // 1 Since both are same
//     GetSum(-1, 0) == -1 // -1 + 0 = -1
//     GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// Циклы
// function getSum(num1, num2) {
//     const nums = [+num1, +num2].sort((num1, num2) => num2 - num1);
//     let sum = 0;

//     for (let i = nums[1]; i <= nums[0]; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// рекурсия
function getSum(num1, num2) {  
  let sum = 0;
  let min = Math.min(num1, num2);
  const MAX = Math.max(num1, num2);
  console.log(min);

  if (MAX === min) {
    return sum + min;
  } else {
    return sum += min + getSum(++min, MAX);
  }

}

console.log(getSum(1, 10));


// 11 
// If a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108

let word = "love".toLowerCase();
const ABC = "abcdefghijklmnopqrstuvwxyz";

const sum = Array.from(word).reduce((accumulator, currentValue) => accumulator + ABC.indexOf(currentValue) + 1, 0);

console.log(sum);

// 12 Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// function buildTriangle (a, b, c) {
//     if (a === 0 || b === 0 || c === 0) return false;
    
//     if ((a + b) > c && (a + c) > b && (b + c) > a) return true;

//     return false;
// }

const buildTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

console.log(buildTriangle(2, 4, 6));