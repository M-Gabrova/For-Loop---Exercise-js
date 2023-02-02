function tennisRanking(input) {
    let numTournaments = Number(input[0]);
    let pointsInitial = Number(input[1]);



    let pointsWon = 0;


    let tournamentsWon = 0;

    for (let i = 2; i < input.length; i++) {

        let curResult = input[i];

        if (curResult == "W") {
            pointsWon += 2000;
            tournamentsWon++;
        }
        else if (curResult == "F") {
            pointsWon += 1200;
        }
        else {
            pointsWon += 720;
        }
    }

    let totalPoints = pointsInitial + pointsWon;

    console.log(`Final points: ${totalPoints}`);
    let averagePoints = Math.floor(pointsWon / numTournaments);
    console.log(`Average points: ${averagePoints}`);

    let tournamentWonPercent = (tournamentsWon / numTournaments) * 100;
    console.log(`${tournamentWonPercent.toFixed(2)}%`);

}
tennisRanking(["5", "1400", "F", "SF", "W", "W", "SF"])