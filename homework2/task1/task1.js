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

    return {
        currentValue: counter,
        plus(num = 1) {
            return this.currentValue += num;
        },
        minus(num = 1) {
            return this.currentValue -= num;
        },
        reset() {
            return this.currentValue = counter;
        }
    }
};

dosmth(0).plus(5);

// методы функции - решение от Егора
// function createCounter(initialValue = 0) {

//     return {
//         currentValue: initialValue,
//         showValue() {
//             return this.currentValue;
//         },
//         increment(number = 1) {
//             return this.currentValue += number;
//         },
//         decrement(number = 1) {
//             return this.currentValue -= number;
//         },
//         discard() {
//             return this.currentValue = initialValue;
//         }
//     }
// };

//createCounter(0).increment(5).decrement(3);