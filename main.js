let principal = document.getElementById("principal")
let time = document.getElementById("time")
let rate = document.getElementById("rate")

let result = document.getElementById("result")


let calculateBtn = document.getElementById("calculateBtn")


function simpleInterestCalculator(){
    let simpleInterest = (principal.value*time.value*rate.value)/100
    result.innerText = "The Result Is " + simpleInterest;

}


calculateBtn.addEventListener("click", function(){
    simpleInterestCalculator();
})

