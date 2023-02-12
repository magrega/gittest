import {
    getCityAndCountry
} from "./APIservices.js";

const weatherContainer = document.querySelector('.weatherData');

const convertToDegreeCelsius = (temperature) => `${Math.floor(((+(temperature) - 32) * 5 / 9))}C`;

async function getWeatherData(obj) {
    const cityAndCountry = await getCityAndCountry(obj.latitude, obj.longitude);
    const weather = {
        description: obj.description,
        clouds: obj.currentConditions.conditions,
        feelsLike: convertToDegreeCelsius(obj.currentConditions.feelslike),
        pressure: `${obj.currentConditions.pressure}MB`,
        temperature: convertToDegreeCelsius(obj.currentConditions.temp),
        tomorrow: convertToDegreeCelsius(obj.days[1].temp),
        city: cityAndCountry.city ?? cityAndCountry.state ?? cityAndCountry.town ?? cityAndCountry.village,
        country: cityAndCountry.country
    }

    return weather;
};

export function getLocation() {
    
    return new Promise((res, rej) => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(res, rej) : alert("Geolocation not supported");
    })
};

function setWeatherDataToLocalStorage(obj) {
    if (obj.city && obj.country && obj.temperature && obj.feelsLike) {
        localStorage.setItem("city", obj.city);
        localStorage.setItem("country", obj.country);
        localStorage.setItem("temp", obj.temperature);
        localStorage.setItem("feelslike", obj.feelsLike);
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
        P.innerHTML = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${obj[key]}`;
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