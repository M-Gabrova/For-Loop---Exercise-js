function oscars(input) {
    let actorName = input[0];
    let pointsAcademy = Number(input[1]);
    let juryCount = Number(input[2]);
    let points = pointsAcademy

    let juryNameIndex = 3;
    let juryScoreIndex = 4;
   

    for (i = 0; i < juryCount; i++)
    {
        let juryName = input[juryNameIndex];
        let score = Number(input[juryScoreIndex]);
        points += (juryName.length * score) / 2;
        juryNameIndex += 2;
        juryScoreIndex += 2;
        

        if (points > 1250.50) {            
            break;
        }
       
    }

    if (points > 1250.50) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
     
    }
    else {
        let pointsNeeded = 1250.50 - points;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])