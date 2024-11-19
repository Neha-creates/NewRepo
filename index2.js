// Check eligibility for vote by age
function eligibility(age){
    if(age < 18){
        console.log("Not eligible to vote!");
    }else if(age >= 18){
        console.log("Eligible to vote!");
    }
}
eligibility(5)