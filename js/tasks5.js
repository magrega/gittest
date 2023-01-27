// 1 Создать 5 div в html (руками). Один с классом, один с айди. Вытащить вначале div по тегу и вывести их в консоль. Вытащить div по классу, вывести в консоль и изменить ему бэкграунд. Вытащить div по айди, добавить ему класс.

console.log(document.getElementById('div1'));
console.log(document.querySelector('.div2'));
document.querySelector('.div2').style.backgroundColor = 'red';
document.getElementById('div1').classList.add('added');

// 2 Написать функцию которая в качестве аргумента принимает тэг, и возвращает все элементы которые находяться на странице, соответствующие входящему аргументу.

function returnTag(tag) {
    return document.getElementsByTagName(tag);
}
console.log(returnTag('div'));

// 3 Создать функцию которая создает элемент и помещает текст в него, после чего запрашивает у пользователя, добавлять ли к этому элементу класс. Если да --> то добавляем класс. Созданный элемент в конце мы должны добавить в наш файл index.html

function createElem(text) {
    let elem = document.createElement('div');
    elem.innerHTML = text;

    confirm("Add class?") ? elem.classList.add("added") : elem.classList.remove("added");

    document.body.prepend(elem);
}

// createElem("HELLO WORLD");

// 4 Спросить у пользователя его имя, фамилию, возраст и настроение, а потом с помощью JS сформировать div в котором выводится эта информация, каждое поле должно быть обернуто в какой-то HTML элемент, например спан или р, или что вы захотите там сделать, также добавьте хотя бы минимальные стили, в самом html файле ничего не должно быть.

// let name = prompt("Name?");
// let lastname = prompt('last name?');
// let mood = prompt("How are you feeling?");

let name = "Alex";
let lastname = "ebobo";
let mood = "meddling";

let elem = document.createElement('div');
elem.classList.add("task4");
elem.style.backgroundColor = 'red';
document.body.append(elem);

let p = document.createElement('p');
p.innerHTML = name;
p.style.fontSize = '20px';
p.style.fontWeight = 'bold';
p.classList.add("theP");


let span = document.createElement('span');
span.innerHTML = lastname;
span.style.display = 'block';
span.style.fontFamily = 'Arial';
span.style.backgroundColor = 'blue';
span.classList.add("theSpan");

let a = document.createElement('a');
a.innerHTML = mood;
a.style.backgroundColor = 'green';
a.classList.add("theA");

elem.appendChild(p);
elem.appendChild(span);
elem.appendChild(a);

// 5 Вывести в консоль количество каждого тега и все классы в body, которые были созданы в первой задаче в виде объекта, пример:
// При определении количества элементов не надо ничего изобретать супер-абстрактного, создали div, вы это знаете и ищете их, создали span, вытащили их и посчитали и так далее.

let obj = {};

// obj.div = document.getElementsByTagName('div').length;
// obj.a = document.getElementsByTagName('a').length;
// obj.p = document.getElementsByTagName('p').length;
// obj.span = document.getElementsByTagName('span').length;
obj.classArr = [];

for (const classes of document.body.getElementsByTagName("*")) {
    if (classes.className != '')
    obj.classArr.push(classes.className);
}

for (const item of document.body.getElementsByTagName("*")) {

    if (obj.hasOwnProperty(item.nodeName.toLowerCase())) continue;
    if (item.nodeName.toLowerCase() === "script") continue;

    obj[item.nodeName.toLowerCase()] = document.body.getElementsByTagName(item.nodeName.toLowerCase()).length;
}

// console.log(obj);

