let smoke = confirm ("Ты куришь?");
let years = prompt ('Сколько тебе лет?');



if (years <= 18 && smoke===false) {
    alert ('Так держать');
}   else if (smoke===true) {
    alert ('Маме расскажу!');
}

