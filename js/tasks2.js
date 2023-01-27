// 1 Создать массив из чисел, длинной не менее 5. Далее написать программу которая берет все числа из исходного массива, возводит их в квадрат и записывает в новый массив. В конце вывести результат в консоль.

let numArr = [2, 5, 10, 12, 14];

// Вариант 1
// function squareArray(arr) {
//     let squareArr = [];
//     arr.map((item) => squareArr.push(Math.pow(item, 2)));
//     return squareArr;
// }

// console.log(squareArray(numArr));
// console.log(numArr);

// Вариант 2
// console.log(numArr.map((item) => Math.pow(item, 2)));

// 2 Дан массив
// let array = ['sun', 'moon', undefined, 13, 99, 412, 0.8764]
// Вывести сумму всех чисел в консоль

let array = ['sun', 'moon', undefined, 13, 99, 412, 0.8764];

// Вариант 1
// let sum = 0;
// array.map((item => {
//     if (typeof item === 'number') sum += item;
// }));
// console.log(sum);

// Вариант 2
// const sum = array.reduce((accumulator, currentValue) => {
//         if (isNaN(currentValue)) {
//             return accumulator;
//         }
//         return accumulator + currentValue;
//     }, 0
// );
// console.log(sum);

// 3 Дана матрица
// Вывести среднее значение чисел в матрице

let matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [1, 1, 1, 900000],
]; // length = 4

// let median = matrix.flat().reduce((accumulator, currentValue) => accumulator +currentValue) / matrix.flat().length;
// console.log(median);

// 4 Дан массив
// Найти самое большое число в массиве и вывести в консоль

let arr = [41, 78, 98, 76, 74, 99];

// console.log(arr.sort((num1, num2) => num2 - num1)[0]);

// 5 Дан массив
// Вывести в консоль два массива. Один с положительными числами, другой с отрицательными.

let arr1 = [-14, 24, -89, 43, 0 , -1, 412, 4];

// const minus = [];
// const plus = [];
// arr1.map(item => item >= 0 ? plus.push(item) : minus.push(item));

// console.log(minus, plus);

// 6 Дан массив
// Переверните его.

let array1 = ['привет', 'дорогой', 'как', 'дела?'];
// console.log(array1.reverse());

// 7 Спросите у пользователя слово и если оно является палиндромом, по выведите в окно браузера ответ Это слово палиндром
// Использовать можно только методы массивов

// let word = prompt("word?");
// if (Array.from(word).join('') === Array.from(word).reverse().join('')) alert("Это слово палиндром");

// 8 Вывести последний элемент массива не зависимо от его длинны.

let arr2 = [-14, 24, -89, 43, 0 , -1, 412, 4, 10];

// console.log(arr2[arr2.length-1]);
// console.log(arr2.at(-1));

// 9 Обрежьте массив до 4 значений

// console.log(arr2.slice(0, 4));
// console.log(arr2.splice(0, 4));