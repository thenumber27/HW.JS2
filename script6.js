
let years = prompt ('Сколько тебе лет?');



if (years == 1) {
    alert (years + 'год');
}   else if (years < 5) {
    alert (years + 'года');
}   else if (years < 21) {
    alert (years + 'лет');
}   else if (years % 10 === 1) {
    alert (years + 'год');
}   else if (years % 10 < 5) {
    alert (years + 'года');
}   else {
    years + "лет";
    }

