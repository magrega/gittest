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

//variables
const HOST = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const KEY = "CU6C3P9UUA3R89ZXRPGWJHH7C";
const weatherContainer = document.querySelector('.weatherData');
const inputElement = document.querySelector(".input");
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

//functions
async function getWeatherData(obj) {
    const weather = {};
    weather.description = obj.description;
    weather["Clouds"] = obj.currentConditions.conditions;
    weather["Feels like"] = `${Math.floor(((+(obj.currentConditions.feelslike) - 32) * 5 / 9))}C`;
    weather["Pressure"] = `${obj.currentConditions.pressure}MB`;
    weather["Temperature"] = `${Math.floor(((+(obj.currentConditions.temp) - 32) * 5 / 9))}C`;
    weather["Tomorrow"] = `${Math.floor(((+(obj.days[1].temp) - 32) * 5 / 9))}C`;
    await getCityAndCountry(obj.latitude, obj.longitude, weather);
    return weather;
};

function setLocalStorage(obj) {
    localStorage.setItem("city", obj.city);
    localStorage.setItem("country", obj.country);
    localStorage.setItem("temp", obj["Temperature"]);
    localStorage.setItem("feelslike", obj["Feels like"]);
}

function setWeatherInfo(obj) {
    weatherContainer.innerHTML = "";
    weatherContainer.classList.add('seeable');
    document.querySelector('form').reset();
    return obj.then(obj => {
        for (const key in obj) {
            if (key === 'city' || key === 'country') continue;
            const P = document.createElement('p');
            P.innerHTML =`${key}: ${obj[key]}`;
            weatherContainer.append(P);
        };
        return obj;
    });

};

function getLocation() {
    return new Promise((res, rej) => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(res, rej) : alert("Geolocation not supported");
    })
};

function fetchRequest(request) {

    return fetch(request).then(item => item.json()).catch((err) => alert(err));
}

function getCityAndCountry(lat, lon, obj) {
    return fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`).then(item => item.json()).then(item => {
        obj.city = item.address.city ?? item.address.state ?? item.address.town;
        obj.country = item.address.country;
        weatherContainer.prepend(`${obj.country}, ${obj.city}`)
        return item.address;
    });
}


const cityArr = [];
function makeTable() {
    const storageCity = localStorage.getItem('city');
    console.log(cityArr.indexOf(storageCity));
    function makeRowsandCells(index = 0, update = '') {
        const row = tbody.insertRow(index);
        const cityCell = row.insertCell();
        cityCell.innerHTML = localStorage.getItem('city') + update;
        const cityCell1 = row.insertCell();
        cityCell1.innerHTML = localStorage.getItem('country');
        const cityCell2 = row.insertCell();
        cityCell2.innerHTML = localStorage.getItem('temp');
        const cityCell3 = row.insertCell();
        cityCell3.innerHTML = localStorage.getItem('feelslike');
    }


    if (cityArr.includes(storageCity)) {
        tbody.deleteRow(cityArr.indexOf(storageCity));
        makeRowsandCells(cityArr.indexOf(storageCity), " UPDATE");

    } else {
        makeRowsandCells();
        cityArr.unshift(storageCity);
    }

    if (tbody.children[0]) {
        table.classList.add('table-visible');
    }

}

function clearTableAndLocalStorage() {
    table.classList.remove('table-visible');
    tbody.innerHTML = '';
    cityArr.length = 0;
    localStorage.clear();

}

//eventlisteners
document.querySelector('.search').addEventListener('click', async function (e) {
    e.preventDefault();

    if (inputElement.value === '') {
        alert("Input can't be empty");
        return;
    };

    const query = inputElement.value;
    const request = `${HOST}${query}?unitGroup=us&key=${KEY}&contentType=json`;
    fetchRequest(request).then(item => setWeatherInfo(getWeatherData(item))).then(item => setLocalStorage(item)).then(() => makeTable());

});

document.querySelector('.myWeather').addEventListener('click', async function () {
    const query = await getLocation();
    const request = `${HOST}${query.coords.latitude},${query.coords.longitude}?unitGroup=us&key=${KEY}&contentType=json`;
    fetchRequest(request).then(item => setWeatherInfo(getWeatherData(item))).then(item => setLocalStorage(item)).then(() => makeTable());
});

document.querySelector('.clear').addEventListener('click', function () {
    clearTableAndLocalStorage();
});