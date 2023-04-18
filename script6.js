
let years = prompt ('Сколько тебе лет?');


if(years % 10 === 1 && years % 100 !== 11) {
    alert (years + ' год');
} else if (!(years % 10) || years % 10 > 4 || (years % 100 > 10 && years % 100 < 15)) {
    alert (years + ' лет');
} else {
    alert (years + ' года');
}