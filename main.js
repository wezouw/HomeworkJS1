CheckCharge(80);
CheckCharge(20);
CheckCharge(100);

function CheckCharge(charge) {
    if (charge >= 80)
        console.log("Ваш телефон ще має достатній заряд батареї")
    else if (charge < 30){
        console.log("Ваш телефон майже розряджений, зарядіть свій пристрій")
    }
}