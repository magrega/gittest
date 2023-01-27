const COUNTER = document.querySelector('.counter');
let count = 0;

function counter(btn) {
    if (btn.innerHTML === "+") {
        COUNTER.innerHTML = ++count;
    } else if (btn.innerHTML === "-") {
        COUNTER.innerHTML = --count;
    } else if (btn.innerHTML === "reset") {
        COUNTER.innerHTML = 0;
    }
};
// делегирование
// document.body.addEventListener('click', function (e) {
//     if (e.target.tagName != "BUTTON") return;
//     counter(e.target);
// });

//контекст?
document.body.querySelectorAll('button').forEach(item => item.addEventListener('click', function () {
    counter(this);
}));

