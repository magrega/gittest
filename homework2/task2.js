// 2. Сделай функцию, которая может принять бесконечное количество чисел и возвращает массив только уникальных чисел

//learnJS
// function unique(...theArgs) {
//     return Array.from(new Set(theArgs));
// }

// console.log(unique(1, 2, 3, 5, 2, 3, 5));

//мое решение

function unique(...theArgs) {
    const uniqueArr = [];

    for (let i = 0; i < theArgs.length; i++) {
        if (uniqueArr.includes(theArgs[i])) continue;
        uniqueArr.push(theArgs[i]);
    }
    return uniqueArr;
}

console.log(unique(1, 2, 3, 5, 2, 3, 5));

//мое решение - нагуглил подходящий метод
// function unique(...theArgs) {
  
//     return theArgs.filter((item, index, array) => array.indexOf(item) === index);
// }

// console.log(unique(1, 2, 3, 5, 2, 3, 5));