// 5. Вам необходимо создать приложение по поиску погоды:
//  • используйте бесплатное REST API (https://weatherstack.com/) для данных;
//  • создайте index.html с разметкой:
//  ◦ html input & label, //  ◦ html button
//  ◦ div элементы для полученных данных
//  ◦ для построение красивого UI/UX используйте воображение
//  • создайте style.css файл со стилями (попробуйте сделать это красиво, применив свои навыки), include it into index.html
//  • создайте index.js файл со следующей логикой:
//  ◦ когда пользователь кликает кнопку Поиск или нажимает Enter на клавиатуре после ввода строки поиска, он должен получить таблицу с данными о погоде в выбранном городе;
//  ◦ подумайте о грамотной валидации полей;

import {
    handleObject
} from "./handleObject.js";
import {
    makeTable,
    clearTableAndLocalStorage
} from "./makeTable.js";
import {
    fetchRequest,
    getLocation
} from "./requests.js";


//variables
const HOST = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const KEY = "CU6C3P9UUA3R89ZXRPGWJHH7C";
const inputElement = document.querySelector(".input");
export const loading = document.querySelector('#loading');


//eventlisteners
document.querySelector('.search').addEventListener('click', async function (e) {
    e.preventDefault();

    if (inputElement.value === '') {
        alert("Input can't be empty");
        return;
    };

    const query = inputElement.value;
    const request = `${HOST}${query}?unitGroup=us&key=${KEY}&contentType=json`;
    fetchRequest(request).then(item => handleObject(item)).then(() => makeTable());

});

document.querySelector('.myWeather').addEventListener('click', async function () {
    const query = await getLocation();
    const request = `${HOST}${query.coords.latitude},${query.coords.longitude}?unitGroup=us&key=${KEY}&contentType=json`;
    fetchRequest(request).then(item => handleObject(item)).then(() => makeTable());
});

document.querySelector('.clear').addEventListener('click', function () {
    clearTableAndLocalStorage();
});