function salary (input){
    let numTabs = Number(input[0]);
    let salary = Number(input[1]);
    let tabName;
    
    for (let i = 2; i <= numTabs+1; i++) {
       tabName = input[i];

        if(tabName === "Facebook"){
            salary -= 150;
        }
        else if(tabName === "Instagram"){
            salary -= 100;
        }
        else if(tabName === "Reddit"){
            salary -= 50;
        }

        if(salary <= 0){
            console.log("You have lost your salary.");
            return;        
        }        
    }

       console.log(salary);
}
salary (["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])