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


const HOST = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const KEY = "******";
const weatherContainer = document.querySelector('.weatherData');
const inputElement = document.querySelector(".input");

function getWeatherData(item) {
    const weather = {};

    weather.place = item.resolvedAddress;
    weather.description = item.description;
    weather.conditions = "Clouds: " + item.currentConditions.conditions;
    weather.feelslike = "Feels like: " + Math.floor(((+(item.currentConditions.feelslike) - 32) * 5 / 9)) + "C";
    weather.pressure = "Pressure: " + item.currentConditions.pressure + " MB";
    weather.temp = "Temperature: " + Math.floor(((+(item.currentConditions.temp) - 32) * 5 / 9)) + "C";
    
    return weather;
};

function setWeatherInfo(obj) {
    weatherContainer.innerHTML = "";
    weatherContainer.classList.add('seeable');
    for (const key in obj) {
        const P = document.createElement('p');
        P.innerHTML = obj[key];
        weatherContainer.append(P);
    }
};

document.querySelector('.letsgo').addEventListener('click', function (e) {
    e.preventDefault();

    if (inputElement.value === '') {
        alert("Input can't be empty");
        return;
    };

    let query = inputElement.value;
    
    const request = `${HOST}${query}?unitGroup=us&key=${KEY}&contentType=json`;   
    fetch(request).then(item => item.json()).then(item => {
       
        setWeatherInfo(getWeatherData(item));
        document.querySelector('form').reset();
        
    }).catch(() => alert("No such city!"));
});
