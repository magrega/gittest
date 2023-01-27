// let table = document.body.firstElementChild;
// table.rows[0].cells[0].style.backgroundColor = 'red';
// table.rows[1].cells[1].style.backgroundColor = 'red';
// table.rows[2].cells[2].style.backgroundColor = 'red';
// table.rows[3].cells[3].style.backgroundColor = 'red';
// table.rows[4].cells[4].style.backgroundColor = 'red';

// for (let i = 0; i < table.rows.length; i++) {
//     table.rows[i].cells[i].style.backgroundColor = 'red';
    
// }

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    document.getElementById('hideMe').style.display = 'none';
});

document.getElementsByTagName('button')[1].addEventListener('click', function() {
    this.style.display = 'none';
});

console.log(document.querySelector('ul>span'));
document.getElementsByTagName('ul')[0].addEventListener('click', function() {

    for (const child of document.querySelectorAll('ul > div')) {
        if (child.style.display === "none") {
            child.style.display = "block";
            document.querySelector('ul>span').style.transform = "rotate(90deg)";
        } else {
            child.style.display = "none";
            document.querySelector('ul:before');
            document.querySelector('ul>span').style.transform = "rotate(0deg)";
        }
    }
});


