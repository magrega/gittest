
// const COUNTER = document.querySelector('.counter');
// let count = 0;

// function counter(btn) {
//     if (btn.innerHTML === "+") {
//         COUNTER.innerHTML = ++count;
//     } else if (btn.innerHTML === "-") {
//         COUNTER.innerHTML = --count;
//     } else if (btn.innerHTML === "reset") {
//         COUNTER.innerHTML = 0;
//     }
// };

// делегирование
// document.body.addEventListener('click', function (e) {
//     if (e.target.tagName != "BUTTON") return;
//     counter(e.target);
// });

//контекст?
// document.body.querySelectorAll('button').forEach(item => item.addEventListener('click', function () {
//     counter(this);
// }));

// методы функции - мое решение
function dosmth(counter = 0) {

    this.plus = function (num) {
        counter = counter + num;
    };

    this.minus = function (num) {
        counter = counter - num;
    };

    this.reset = function () {
        counter = 0;
    };


    this.plus(5);
    this.minus(2);
    

    return counter;
};

console.log(dosmth(0));

// методы функции - решение от Егора
// function dosmth(counter = 0) {

//     return {
//         currentValue: counter,
//         plus(num = 1) {
//             console.log(this.plus instanceof dosmth);
//             return this.currentValue += num;
//         },
//         minus(num = 1) {
//             return this.currentValue -= num;
//         },
//         reset() {
//             return this.currentValue = counter;
//         }
//     }
// };

// console.log(dosmth(2).plus(5));

