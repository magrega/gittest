const HOST = 'https://reqres.in/api/users/';

function setLocalStorage(user) {
    localStorage.setItem("first_name", user.data.first_name);
    localStorage.setItem("email", user.data.email);
    localStorage.setItem("last_name", user.data.last_name);
    localStorage.setItem("id", user.data.id);
    localStorage.setItem("avatar", user.data.avatar);

}

function setPageInfo(user) {
    for (key in user.data) {
        if (key === "id" || key === "avatar") continue;
        const P = document.createElement('p');
        P.innerHTML = key + ": " + user.data[key];
        document.querySelector('.idData').append(P);
    }
};

document.querySelector('button').addEventListener('click', async function (e) {
    e.preventDefault();

    const ID = document.getElementById('form').id.value;
    fetch(HOST + ID).then(item => {
        if (item.status === 404) {
            document.querySelector('.error').innerHTML = `Юзверя с айди ${ID} не бывает`;
            return;
        }
        return item.json();

    }).then(user => {
        if (user) {
            setLocalStorage(user);
            setPageInfo(user);
            return;
        }
        alert("error");


    }).catch(error => console.log(error));
});