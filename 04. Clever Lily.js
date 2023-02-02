function cleverLily (input){
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let totalMoney = 0;
    let evenBirthdayMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            totalMoney += evenBirthdayMoney;
            totalMoney -= 1;
            evenBirthdayMoney += 10;
        }
        else{
            totalMoney += priceToy;
        }
    }

    if (totalMoney >= washingMachine) {
        let moneyLeft = totalMoney - washingMachine;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }
    else
    {
        let moneyNeeded = washingMachine - totalMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);

    }


}
cleverLily (["10", "170.00", "6"])