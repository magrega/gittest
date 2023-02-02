// Создаём свой компонент Notifications
// Напишите скрипт, который динамически будет создавать и подключать компонент нотификаций к любому приложению:
// Компонент должен содержать следующие элементы:
//  • (1) Иконка закрытия. По клику - закрывать нотификации.
//  • (2) Checkbox, который дизэйблит нотификации. Значение сохраняется в localstorage. При загрузке страницы, проверяется этот флаг, и если он в значениии "нотификации отключены", компонент не будет загружаться.
//  • Стрелки (3) и (4) по клику на которые листаем нотификации из списка (предыдущая - следующая), нотификации отображаются как элемент номер (6).
//  • (5) Номер и позиция текущей нотификации.
//  • Поддержка управления компонентом с клавиатуры.
async function createNotification() {
    const data = await fetch("mock.json").then(item => item.json()).then(item => item);

    const notificationBody = document.createElement('div');
    notificationBody.style.position = "absolute";
    notificationBody.style.right = 10;
    notificationBody.style.padding = "10px";
    notificationBody.style.paddingRight = "20px";
    notificationBody.style.backgroundColor = "beige";
    notificationBody.style.boxSizing = "border-box";
    notificationBody.style.fontSize = "14px";

    const notificationTitle = document.createElement('p');
    notificationTitle.style.margin = "0px";
    notificationTitle.style.marginBottom = "5px";

    const notificationText = document.createElement('p');
    notificationText.style.overflowY = "auto";
    notificationText.style.margin = "0px";
    notificationText.style.maxHeight = "150px";
    notificationText.style.textAlign = "justify";
    notificationText.style.width = "300px";
    notificationText.style.height = "250px";

    const notificationX = document.createElement('span');
    notificationX.innerHTML = "❌";
    notificationX.style.fontWeight = "bold";
    notificationX.style.fontSize = "10px";
    notificationX.style.backgroundColor = "white";
    notificationX.style.padding = "2px 2px";
    notificationX.style.border = "1px solid black";
    notificationX.style.position = "absolute";
    notificationX.style.right = 5;
    notificationX.style.top = 5;
    notificationX.style.cursor = "pointer";

    const notificationCheckbox = document.createElement('input');
    notificationCheckbox.type = "checkbox";

    const notificationRadios = document.createElement('div');
    notificationRadios.classList.add('radios');
    for (let i = 0; i < data.length; i++) {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radio';
        if (i === 0) radio.checked = "true";
        radio.classList.add(i);
        notificationRadios.append(radio);
    }

    const leftArrow = document.createElement('span');;
    leftArrow.innerHTML = "⬅️";
    leftArrow.tabIndex = "1";
    leftArrow.style.cursor = "pointer";
    leftArrow.style.userSelect = "none";
    notificationRadios.prepend(leftArrow);

    const rightArrow = document.createElement('span');;
    rightArrow.innerHTML = "➡️";
    rightArrow.tabIndex = "2";
    rightArrow.style.cursor = "pointer";
    rightArrow.style.userSelect = "none";
    notificationRadios.append(rightArrow);

    const inputContainer = document.createElement('div');
    inputContainer.style.display = "flex";
    inputContainer.style.justifyContent = "space-between";
    inputContainer.prepend(notificationCheckbox, notificationRadios)

    notificationTitle.innerHTML = `${data[0].id}. ${data[0].title}`;
    notificationText.innerHTML = data[0].phrase;

    notificationBody.prepend(notificationTitle, notificationText, notificationX, inputContainer);
    document.body.prepend(notificationBody);


    function rightArrowFunc() {
        let indexChecked = +(document.querySelector('.radios > input:checked').classList[0]);

        if (indexChecked > 8) {
            indexChecked = 0;
            document.querySelectorAll('.radios > input')[indexChecked].click();
        } else {
            document.querySelectorAll('.radios > input')[indexChecked + 1].click();
        }
    }

    function leftArrowFunc() {
        let indexChecked = +(document.querySelector('.radios > input:checked').classList[0]);

        if (indexChecked < 1) {
            indexChecked = 9;
            document.querySelectorAll('.radios > input')[indexChecked].click();
        } else {
            document.querySelectorAll('.radios > input')[indexChecked - 1].click();
        }

    }

    function close() {
        notificationBody.remove();
    }

    function setDisableFlag(checkbox) {

        checkbox.checked ? localStorage.setItem('neverShow', true) : localStorage.remove('neverShow');
    }


    notificationRadios.addEventListener('click', function (e) {
        if (e.target.type !== "radio") return;
        const index = e.target.classList[0];
        notificationTitle.innerHTML = `${data[index].id}. ${data[index].title}`;
        notificationText.innerHTML = data[index].phrase;
    });

    document.addEventListener('keydown', function (e) {
        if (e.code === "ArrowRight") rightArrowFunc();

    });

    document.addEventListener('keydown', function (e) {
        if (e.code === "ArrowLeft") leftArrowFunc();

    });

    rightArrow.addEventListener('click', function () {
        rightArrowFunc();
    });

    rightArrow.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') rightArrowFunc();
    });

    leftArrow.addEventListener('click', function () {
        leftArrowFunc();
    });

    leftArrow.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') leftArrowFunc();
    });

    notificationX.addEventListener('click', function () {
        close();
    })

    notificationCheckbox.addEventListener('click', function (e) {
        setDisableFlag(e.target);
    });
}

localStorage.getItem('neverShow') ? console.log("Notification disabled") : createNotification();

