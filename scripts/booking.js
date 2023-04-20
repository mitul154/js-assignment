/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;
let cost;
const clearDays = document.getElementById("clear-button");
const day_ = document.getElementsByClassName("blue-hover");
const half = document.getElementById("half");
const full = document.getElementById("full");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function selectDay(e){
    if (!e.target.classList.contains("clicked")){
        e.target.classList.add("clicked");
        numberOfDays++;
    }
    else {
        e.target.classList.remove("clicked");
        numberOfDays--;
    }
    recalculate();
}

for (let i = 0; i < day_.length; i++){
    if(day_[i].tagName === "LI")
    day_[i].addEventListener("click", selectDay);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearButton (){
    for (let i = 0; i < day_.length; i++){
        if(day_[i].tagName === "LI")
        day_[i].classList.remove("clicked");
    }
    calculatedCost.innerHTML = 0;
    cost = 0;
    numberOfDays = 0;
    fullDay();
}

clearDays.addEventListener("click", clearButton);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDay (){
    half.classList.add("clicked");
    full.classList.remove("clicked");
    costPerDay = 20;
    recalculate();
}

half.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay (){
    full.classList.add("clicked");
    half.classList.remove("clicked");
    costPerDay = 35;
    recalculate();
}

full.addEventListener("click", fullDay);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    cost = costPerDay * numberOfDays;
    calculatedCost.innerHTML = cost;
}
