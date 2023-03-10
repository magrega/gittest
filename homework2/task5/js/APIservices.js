import {
    getLocation
} from "./handleWeatherObject.js";

const HOST = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const KEY = "CU6C3P9UUA3R89ZXRPGWJHH7C";
const inputElement = document.querySelector(".input");
const loading = document.querySelector('#loading');
const myWeatherBtn = document.querySelector(".myWeather");
const searchBtn = document.querySelector(".search");

async function makeURL(button) {
    let query;
    if (button === searchBtn) {
        if (inputElement.value === '') {
            alert("Input can't be empty. Showing local.");

            return makeURL(myWeatherBtn);
        }
        query = inputElement.value;
    } else if (button === myWeatherBtn) {
        query = await getLocation().then(item => `${item.coords.latitude},${item.coords.longitude}`);
    }

    const weatherUrl = `${HOST}${query}?unitGroup=us&key=${KEY}&contentType=json`;

    return weatherUrl;
}

export async function fetchRequest(button) {
    const request = await makeURL(button);
    loading.classList.add('visible');

    return fetch(request).then(item => item.json()).catch((err) => {
        loading.classList.remove('visible');
        alert(err);
    });
}

export function getCityAndCountry(lat, lon) {

    return fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`).then(item => item.json()).then(item => item.address);
};