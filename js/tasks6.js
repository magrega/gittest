// 1 Создать кнопку по клику на которую будут добавляться div на страницу. Обработчик клика протестировать 3-мя доступными нам способами.
// document.querySelector('.task1').addEventListener('click', function () {
//     let div = document.createElement('div');
//     div.innerHTML = 'I\'ve been added!'
//     document.body.append(div);
// });

// addDiv.onclick = function() {
//     let div = document.createElement('div');
//     div.innerHTML = 'I\'ve been added!'
//     document.body.append(div);
// };

// 2 Сделать див, внутри которого будут счётчики нажатий левой и правой кнопки мыши по нему. (Выводить значения на страницу - опционально)

document.querySelector('.clicking').addEventListener('contextmenu', function (e) {
    e.preventDefault()
});

document.querySelector('.clicking').addEventListener('mousedown', function (e) {
    e.preventDefault()
});

let leftClick = 0;
let rightClick = 0;

document.querySelector('.clicking').addEventListener('mouseup', function (e) {
    if (e.button === 0) {
        this.querySelector('.leftClick').innerHTML = leftClick++;
    } else if (e.button === 2) {
        this.querySelector('.rightClick').innerHTML = rightClick++;

    }
});

// 3 Создать кнопку регистрации и логина, по нажатию на первую, появляется модальное окно с просьбой ввести логин, пароль, возраст и имя. В модальном окне должны быть кнопки - отмена и подтвердить. По нажатию на первую, окно просто закрывается, по нажатию на вторую происходит регистрация пользователя (добавляется в массив пользователей, который вы у себя создадите в коде). Обязательно предусмотреть валидацию на пустые поля. 
// Далее если юзер нажмет на кнопку логина, снова появится модальное окно где он должен будет ввести свои данные. По нажатию на кнопку отмена, окно закрывается, по нажатию на кнопку залогиниться, происходит проверка введённых данных. Вы должны проверить есть ли такой пользователь и корректно ли он ввёл данные. При отрицательном результате, вывести нотификацию, что пользователь не существует или неверный пароль, при успешной, вывести поздравление об успешном логине и на экране должна появится инфа с информацией о юзере. Модальное окно должно иметь затемненный задний фон.
const users = [{
    login: "magrega",
    password: "666777",
    name: 'Alex',
    lastname: "Pro",
    age: "27"
},
{
    login: "losos",
    password: "24262426",
    name: 'Bob',
    lastname: "pisos",
    age: "47" 
}];

const overlay = document.getElementById('page-mask');
overlay.style.display = 'none';

document.querySelector('.task3').addEventListener('click', function (e) {
    if (e.target.tagName = 'BUTTON') e.preventDefault();
    if (e.target.classList.contains('signupBtn')) {
        document.querySelector('.signupDiv').style.display = 'block';
        document.querySelector('.loginDiv').style.display = 'none';
    } else if (e.target.classList.contains('loginBtn')) {
        document.querySelector('.loginDiv').style.display = 'block';
        document.querySelector('.signupDiv').style.display = 'none';
    }
    
    overlay.style.display = 'block';
});

document.querySelector('.task3').addEventListener('click', function (e) {
    if (e.target.classList.contains('cancel')) {
        e.preventDefault();
        e.target.closest('div').style.display = 'none';
        overlay.style.display = 'none'
    }
});

signupForm.querySelector('.register').addEventListener('click', function (e) {
    e.preventDefault();
    if (this.parentElement.password.value !== this.parentElement.passwordConfirm.value || this.parentElement.password.value === '' || this.parentElement.passwordConfirm.value === '' || this.parentElement.password.value.length < 7) {
        alert('error pass');
        return;
    }

    users.push({
        name: this.parentElement.name.value || "n/a",
        lastname: this.parentElement.lastname.value || "n/a",
        age: this.parentElement.age.value || "n/a",
        login: this.parentElement.login.value,
        password: this.parentElement.password.value,
    });
    console.log(users);
    this.parentElement.reset();
});


loginForm.querySelector('.login').addEventListener('click', function (e) {
    e.preventDefault();
    let loginSuc = users.find(item => item.login === this.parentElement.login.value && item.password === this.parentElement.password.value);

        if (loginSuc) {
            alert("successful login");
            document.querySelector('.loginDiv').style.display = 'none';
            document.querySelector('.account').style.display = 'block';

            let accountForm = document.getElementById("accountForm");
            accountForm.name.value = loginSuc.name;
            accountForm.lastname.value = loginSuc.lastname;
            accountForm.age.value = loginSuc.age;
            accountForm.login.value = loginSuc.login;
            accountForm.password.value = loginSuc.password;
        } else {
            alert('user not found');
        }

    this.parentElement.reset();
});


