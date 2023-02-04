const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

const cityArr = []; // don't like using array

export function renderSecondTable() {
    const storageCity = localStorage.getItem('city');

    if (cityArr.includes(storageCity)) {
        tbody.deleteRow(cityArr.indexOf(storageCity));
        makeRowsandCells(cityArr.indexOf(storageCity), " UPDATE");

    } else {
        makeRowsandCells();
        cityArr.push(storageCity);
    }

    if (tbody.children[0]) {
        table.classList.add('table-visible');
    }    
};

function makeRowsandCells(index = -1, update = '') {
    const row = tbody.insertRow(index);
    const cityCell = row.insertCell();
    cityCell.innerHTML = localStorage.getItem('city') + update;
    const cityCell1 = row.insertCell();
    cityCell1.innerHTML = localStorage.getItem('country');
    const cityCell2 = row.insertCell();
    cityCell2.innerHTML = localStorage.getItem('temp');
    const cityCell3 = row.insertCell();
    cityCell3.innerHTML = localStorage.getItem('feelslike');
};

export function clearTableAndLocalStorage() {
    table.classList.remove('table-visible');
    tbody.innerHTML = '';
    cityArr.length = 0;
    localStorage.clear();
}