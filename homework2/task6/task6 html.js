async function createNotification() {
    const data = await fetch("mock.json").then(item => item.json()).then(item => item);
    const notification = {
        BodyString: `<div class="notificationBody" style="position: absolute; right: 10px; padding: 10px 20px 10px 10px; background-color: beige; box-sizing: border-box; font-size: 14px;"></div>`,
        Title: `<p class="title" style="margin: 0px 0px 5px;"> ${data[0].id}. ${data[0].title}</p>`,
        Text: `<p class="text" style="overflow-y: auto; margin: 0px; max-height: 150px; text-align: justify; width: 300px; height: 250px;">${data[0].phrase}</p>`,
        X: `<span class="X" tabindex="3" style="font-weight: bold; font-size: 10px; background-color: white; padding: 2px; border: 1px solid black; position: absolute; right: 5px; top: 5px; cursor: pointer;">❌</span>`,
        Controls: `<div class="notificationControls" style="display: flex; justify-content: space-between;"></div>`,
        Checkbox: `<input class="checkbox" type="checkbox">`,
        Radios: `<div class="radios"></div>`,
        leftArrow: `<span class="leftArrow" tabindex="1" style="cursor: pointer; user-select: none;">⬅️</span>`,
        rightArrow: `<span class="rightArrow" tabindex="2" style="cursor: pointer; user-select: none;">➡️</span>`
    }
    document.body.innerHTML = notification.BodyString;

    const notificationBody = document.querySelector('.notificationBody');
    notificationBody.innerHTML += notification.X + notification.Title + notification.Text + notification.Controls;

    const notificationControls = document.querySelector('.notificationControls');
    notificationControls.innerHTML = notification.Checkbox + notification.leftArrow + notification.Radios + notification.rightArrow;

    const notificationRadios = notificationBody.querySelector('.radios');
    const notificationX = notificationBody.querySelector('.X');
    const notificationCheckbox = notificationBody.querySelector('.checkbox');

    notificationRadios.classList.add('radios');
    for (let i = 0; i < data.length; i++) {
        const notificationRadio = document.createElement('input');
        notificationRadio.type = 'radio';
        notificationRadio.name = 'radio';
        if (i === 0) notificationRadio.checked = "true";
        notificationRadio.classList.add(i);
        notificationRadios.append(notificationRadio);
    }

    function ArrowFunc(e) {
        console.log(e.target);
        
        let indexChecked = +(document.querySelector('.radios > input:checked').classList[0]);
        e.stopPropagation();
        if ((e.target.classList.contains('leftArrow') && (e.key === 'Enter' || e.type === 'click')) || e.code === "ArrowLeft") {
            if (indexChecked < 1) {
                indexChecked = 9;
                document.querySelectorAll('.radios > input')[indexChecked].click();
            } else {
                document.querySelectorAll('.radios > input')[indexChecked - 1].click();
            }
        } else if ((e.target.classList.contains('rightArrow') && (e.key === 'Enter' || e.type === 'click')) || e.code === "ArrowRight") {
            if (indexChecked > 8) {
                indexChecked = 0;
                document.querySelectorAll('.radios > input')[indexChecked].click();
            } else {
                document.querySelectorAll('.radios > input')[indexChecked + 1].click();
            }
        }
    }

    function close(e) {
        if (e.key === 'Enter' || e.type === 'click') notificationBody.remove();
    }

    function setDisableFlag(e) {
        e.target.checked ? localStorage.setItem('neverShow', true) : localStorage.removeItem('neverShow');
    }

    notificationRadios.addEventListener('click', function (e) {
        const index = e.target.classList[0];
        notificationBody.querySelector('.title').textContent = `${data[index].id}. ${data[index].title}`;
        notificationBody.querySelector('.text').textContent = data[index].phrase;
    });

    document.body.addEventListener('keydown', e => {
        if (document.querySelector('.notificationBody') && (e.code === "ArrowLeft" || e.code === "ArrowRight")) ArrowFunc(e);
    });
    ['click', 'keydown'].forEach(event => notificationControls.addEventListener(event, ArrowFunc));
    ['click', 'keydown'].forEach(event => notificationX.addEventListener(event, close));
    notificationCheckbox.addEventListener('click', setDisableFlag);
}
localStorage.getItem('neverShow') ? console.log("Notification disabled") : createNotification();