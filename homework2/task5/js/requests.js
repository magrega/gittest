const loading = document.querySelector('#loading');

export function getLocation() {
    return new Promise((res, rej) => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(res, rej) : alert("Geolocation not supported");
    })
};

export function fetchRequest(request) {
    loading.classList.add('visible');
    return fetch(request).then(item => item.json()).catch((err) => {
        loading.classList.remove('visible');
        alert(err);
    });
}