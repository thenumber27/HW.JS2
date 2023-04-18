let smoke = confirm ("Ты куришь?");
let years = prompt ('Сколько тебе лет?');



if (years <= 18 && !smoke) {
    alert ('Так держать');
}   else if (smoke) {
    alert ('Маме расскажу!');
}

