function histogram (input){
    let num = Number(input[0]);
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= num; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < 200) {
            p1++;
        }
        else if (currentNum < 400) {
            p2++;
        }
        else if (currentNum < 600) {
            p3++;
        }
        else if (currentNum < 800) {
            p4++;
        }
        else{
            p5++;
        }
    }
    let p1percent =(p1/num*100).toFixed(2);
    let p2percent =(p2/num*100).toFixed(2);
    let p3percent =(p3/num*100).toFixed(2);
    let p4percent =(p4/num*100).toFixed(2);
    let p5percent =(p5/num*100).toFixed(2);

    console.log(p1percent + "%");
    console.log(p2percent + "%");
    console.log(p3percent + "%");
    console.log(p4percent + "%");
    console.log(p5percent + "%");

}
histogram (["3", "1", "2", "999"])