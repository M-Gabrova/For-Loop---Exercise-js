function trekkingMania(input) {
    let numGroups = Number(input[0]);
    let mussala = 0;
    let montblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let numPeopleInAGroup;

    for (let i = 1; i < numGroups+1; i++)
    {
        numPeopleInAGroup = Number(input[i]);

        if (numPeopleInAGroup < 6)
            mussala += numPeopleInAGroup;
        else if (numPeopleInAGroup < 13)
            montblan += numPeopleInAGroup;
        else if (numPeopleInAGroup < 26)
            kilimandjaro += numPeopleInAGroup;
        else if (numPeopleInAGroup < 41)
            k2 += numPeopleInAGroup;
        else
            everest += numPeopleInAGroup;

    }

    let sumPeople = mussala + montblan + kilimandjaro + k2 + everest;

    console.log(`${(mussala / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(montblan / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / sumPeople * 100).toFixed(2)}%`);


}
trekkingMania(["5", "25", "41", "31", "250", "6"])