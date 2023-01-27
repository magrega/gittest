// 1.	Клонирование объекта перебором:

let user = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

console.log(user.name); // все ещё John в первоначальном объекте

// 2.	Глубокое копирование

// Мы можем реализовать глубокое клонирование, используя рекурсию. Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, например _.cloneDeep(obj) из библиотеки JavaScript lodash.

const man = {
    name: 'John',
    activity: {
        specialist: {
            engineer: 'tester'
        }
    },
    slogan: () => {
        console.log('Is only forward!');
    }
};

const man1 = {};

function cloneObj(newObj, oldObj) {
    for (let prop in oldObj) {
        if (typeof oldObj[prop] === 'object') {
            newObj[prop] = {};
            cloneObj(newObj[prop], oldObj[prop]);
        } else {
            newObj[prop] = oldObj[prop];
        }
    }
}

cloneObj(man1, man);

console.log(man1);

// 3. Можно использовать новый метод джаваскрипт structuredClone()

const mushrooms1 = {
    amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]

//   по объектам тебе надо знать про Object.assign, rest и JSON.stringify и клондип с лоадаша и понимать разницу между всеми способами

// 4. Object.assign - поверхностное копирование, меняет целевой объект, перезаписывает имеющиеся свойства, копирует только перечисляемые и собственные свойства

const target = {
    a: 1,
    b: 2
};
const source = {
    b: 4,
    c: 5,
    z: {
        2: "string"
    }
};

const returnedTarget = Object.assign(target, source);
returnedTarget.z["2"] = "line";
returnedTarget.a = 10;
console.log(returnedTarget);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true

// Object.assign объединяет целевой и исходный объекты, если свойство уже есть, оно заменяется на новое. Копирует из исходных объектов в целевой объект только перечисляемые и собственные свойства. Он присваивает свойства вместо простого копирования или определения новых свойств. Метод Object.assign() не выкидывает исключения, если в качестве исходных значений выступают null или undefined.

Object.assign(dest, [src1, src2, src3]);

// Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

let clonedObj = Object.assign({}, user);

// 6. lodash _.cloneDeep(obj) - глубокое копирование, символы и функции копирует по ссылке

const _ = require('lodash');

const obj = [{
    x: 1
}, {
    y: 2,
    z: {
        1: "string"
    },
    sym: Symbol('foo'),
    func: function() {
        console.log("Hey!");
    }
}];

const deepCopy = _.cloneDeep(obj);

deepCopy.funcTwo = function() {
    console.log("BYE!");
};
deepCopy.symTwo = Symbol("foo");

console.log('Comparing original with deep ',
    obj[0] === deepCopy[0]);

// Changing original value
obj[0].x = 10;

console.log("After changing original value");

console.log("Original value ", obj);

console.log("Deep Copy value ", deepCopy);

console.log(obj.sym === deepCopy.sym);
console.log(obj.sym === deepCopy.symTwo);
console.log(obj.func === deepCopy.func);
console.log(deepCopy.funcTwo === deepCopy.func);

// 7. JSON.parse(JSON.stringify(object)) - глубокое копирование, JSON поддерживает простые объекты, массивы, строки, числа, логические значения и null. Остальное теряется или переводится в null. Дата обращается в стринг.

const a = {
    array: [1, 2, 3, 4],
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(), // stringified
    undef: undefined, // lost
    inf: Infinity, // forced to 'null'
    re: /.*/, // lost
    inside: {
        1: "string"
    }
};

console.log(a);
const cloneObject = JSON.parse(JSON.stringify(a));
cloneObject.inside["1"] = "dick";
console.log(cloneObject);


// 8. Spread (rest) - поверхностная копия, встроенные объекты копируются по ссылке. Копирует из исходных объектов в целевой объект только перечисляемые и собственные свойства.

const cloneFood = {
    ...a
};
a.inside["1"] = "dick";

console.log(cloneFood);
console.log(typeof cloneFood.inside);