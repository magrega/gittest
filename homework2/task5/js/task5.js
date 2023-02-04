// 5. Вам необходимо создать приложение по поиску погоды: //  • создайте index.html с разметкой: //  ◦ html input & label, //  ◦ html button
//  ◦ div элементы для полученных данных //  ◦ для построение красивого UI/UX используйте воображение
//  • создайте style.css файл со стилями (попробуйте сделать это красиво, применив свои навыки), include it into index.html
//  • создайте index.js файл со следующей логикой:
//  ◦ когда пользователь кликает кнопку Поиск или нажимает Enter на клавиатуре после ввода строки поиска, он должен получить таблицу с данными о погоде в выбранном городе;
//  ◦ подумайте о грамотной валидации полей;
// • добавьте кнопку My weather, по клику на которую вы будете получать погоду по текущему местоположению (используя navigator.geolocation получить координаты и сделать запрос);
//  • сохраняйте полученные данные в localstorage и отображайте их в итоговой таблице (можно сделать отдельным модальным окном - на ваше усмотрение);
//  • приложение должно обновлять значения в таблице, если такой город уже существет (не дублировать значения поиска);
//  • добавьте кнопку Clear для очистки данных из таблицы и localstorage; //  • попробуйте использовать другие фичи из API - документация 
//  (https://weatherstack.com/documentation) и добавить их в ваше приложение (например прогноз погоды на след дни, прогноз погоды за прошедшие дня - по введенной дате, и т.д.);

import {
    handleWeatherObject
} from "./handleWeatherObject.js";
import {
    renderSecondTable,
    clearTableAndLocalStorage
} from "./renderSecondTable.js";
import {
    fetchRequest
} from "./APIservices.js";

//eventlisteners
document.querySelector('.searchButtons').addEventListener('click', function (e) {
    e.preventDefault();
    fetchRequest(e.target).then(item => handleWeatherObject(item)).then(() => renderSecondTable());

});

document.querySelector('.clear').addEventListener('click', function () {
    clearTableAndLocalStorage();
});