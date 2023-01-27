let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{
        name: "Иванов"
    }, {
        name: "Петров"
    }],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;


// alert(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != '' && value === meetup) ? undefined : value
// }));


/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

let single = 'magrega';
let names = ['magrega', 'iliakan', 'remy', 'fgsadgfsa'];

async function getUsers(names) {

    const jobs = names.map(item => fetch("https://api.github.com/users/" + item).then(job => {
        if (job.status === 200) {
            return job.json()
        } else {
            return null;
        }
    }));

    let result = await Promise.all(jobs);


    return result;


}


console.log(getUsers(names).then(x => x.forEach(x => console.log(x.login))));