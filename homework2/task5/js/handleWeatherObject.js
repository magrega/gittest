import { getCityAndCountry } from "./APIservices.js";

const weatherContainer = document.querySelector('.weatherData');

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

export function getLocation() {
    return new Promise((res, rej) => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(res, rej) : alert("Geolocation not supported");
    })
};

function setWeatherDataToLocalStorage(obj) {
    if (obj.city && obj.country && obj["Temperature"] && obj["Feels like"]) {
        localStorage.setItem("city", obj.city);
        localStorage.setItem("country", obj.country);
        localStorage.setItem("temp", obj["Temperature"]);
        localStorage.setItem("feelslike", obj["Feels like"]);
    } else {
        alert("No data to set!");
    }
};

function setWeatherfirstTable(obj) {
    weatherContainer.innerHTML = "";
    weatherContainer.classList.add('seeable');
    document.querySelector('form').reset();
    weatherContainer.prepend(`${obj.country}, ${obj.city}`)
    for (const key in obj) {
        if (key === 'city' || key === 'country') continue;
        const P = document.createElement('p');
        P.innerHTML = `${key}: ${obj[key]}`;
        weatherContainer.append(P);
    };
    return obj;
};

export async function handleWeatherObject(obj) {
    const computedObj = await getWeatherData(obj);
    setWeatherDataToLocalStorage(computedObj);
    setWeatherfirstTable(computedObj);
    loading.classList.remove('visible');
    return computedObj;
};