const btn = document.querySelector("button");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const dayDigit = document.getElementById("day_digit");
const monthDigit = document.getElementById("month_digit");
const yearDigit = document.getElementById("year_digit");

const warningDay = document.getElementById("warning-day");
const warningMonth = document.getElementById("warning-month");
const warningYear = document.getElementById("warning-year");

const headingDay = document.getElementById("Heading_day");
const headingMonth = document.getElementById("Heading_month");
const headingYear = document.getElementById("Heading_year");

const dValue = document.getElementById("d-value");
const mValue = document.getElementById("m-value");
const yValue = document.getElementById("y-value");

const current = new Date();

// Branch Functions

function validateDay () {
    if (Number(day.value) < 32 && day.value != "" && Number(day.value) !== 0) {
        warningDay.innerHTML = "";
        dayDigit.innerText = current.getDate() - Number(day.value);
        day.style.borderColor = "hsl(0, 0%, 86%)";
        headingDay.style.color = "hsl(0, 0%, 86%)";
        dayDigit.style.letterSpacing = "0px";
    }   else if (day.value == "" || day.value == " ") {
        warningDay.innerHTML = "This field is required";
        day.style.borderColor = "rgb(233, 66, 66)";
        headingDay.style.color = "rgb(233, 66, 66)";
        dayDigit.innerText = "--";
    }
        else if (Number(day.value) == 0 || Number(day.value) > 31) {
        warningDay.innerHTML = "Must be a valid day";
        day.style.borderColor = "rgb(233, 66, 66)";
        headingDay.style.color = "rgb(233, 66, 66)";
        dayDigit.innerText = "--";
    }
    else {
        warningDay.innerHTML = "This field is required";
        day.style.borderColor = "rgb(233, 66, 66)";
        headingDay.style.color = "rgb(233, 66, 66)";
        dayDigit.innerText = "--";
    }

    if (Number(dayDigit.innerText) === 1 || Number(dayDigit.innerText) === 0) {
        dValue.innerText = "day";
    } else {
        dValue.innerText = "days";
    }
}

function validateMonth () {
    if (Number(month.value) < 13 && month.value != "" && Number(month.value) !== 0) {
        warningMonth.innerHTML = "";
        monthDigit.innerText =(current.getMonth() + 1) - Number(month.value);
        month.style.borderColor = "hsl(0, 0%, 86%)";
        headingMonth.style.color = "hsl(0, 0%, 86%)";
        monthDigit.style.letterSpacing = "0px";
    }  else if (month.value == "" || month.value == " ") {
        warningMonth.innerHTML = "This field is required";
        month.style.border = "1px solid rgb(233, 66, 66)";
        headingMonth.style.color = "rgb(233, 66, 66)";
        monthDigit.innerText = "--";
    }   else if (Number(month.value) == 0 || Number(month.value) >= 12) {
        warningMonth.innerHTML = "Must be a valid month";
        month.style.borderColor = "rgb(233, 66, 66)";
        headingMonth.style.color = "rgb(233, 66, 66)";
        monthDigit.innerText = "--";
    }   else {
        warningMonth.innerHTML = "This field is required";
        month.style.border = "1px solid rgb(233, 66, 66)";
        headingMonth.style.color = "rgb(233, 66, 66)";
        monthDigit.innerText = "--";
    } 

    if (Number(monthDigit.innerText) === 1 || Number(monthDigit.innerText) === 0) {
        mValue.innerText = "month";
    } else {
        mValue.innerText = "months";
    }
}

function validateYear () {
    if (Number(year.value) !== 0 && Number(year.value) <= current.getFullYear()) {
        warningYear.innerHTML = "";
        yearDigit.innerText = current.getFullYear() - Number(year.value);
        year.style.borderColor = "hsl(0, 0%, 86%)";
        headingYear.style.color = "hsl(0, 0%, 86%)";
        yearDigit.style.letterSpacing = "0px";
    }  
    else if (year.value == "" || year.value == " ") {
        warningYear.innerHTML = "This field is required";
        year.style.border = "1px solid rgb(233, 66, 66)";
        headingYear.style.color = "rgb(233, 66, 66)";
        yearDigit.innerText = "--";
    }   
    else if (Number(year.value) == 0 || Number(year.value) > current.getFullYear()) {
        warningYear.innerHTML = "Must be a valid year";
        year.style.borderColor = "rgb(233, 66, 66)";
        headingYear.style.color = "rgb(233, 66, 66)";
        yearDigit.innerText = "--";
    }   
    else {
        warningYear.innerHTML = "This field is required";
        year.style.border = "1px solid rgb(233, 66, 66)";
        headingYear.style.color = "rgb(233, 66, 66)";
        yearDigit.innerText = "--";
    }

    if (Number(yearDigit.innerText) === 1 || Number(yearDigit.innerText) === 0) {
        yValue.innerText = "year";
    } else {
        yValue.innerText = "years";
    }
}

const calcYear = Number(year.value) / 4;

function checkLeapYear () {
    if(Number(month.value) === 4 || Number(month.value) === 6 || Number(month.value) === 9 || Number(month.value) === 11){
        if(Number(day.value) === 31) {
            warningDay.innerHTML = "Must be a valid day";
            day.style.borderColor = "rgb(233, 66, 66)";
            headingDay.style.color = "rgb(233, 66, 66)";
            dayDigit.innerText = "--";
        } 
    } else if (Number(month.value) === 2) {
        if (Number(day.value) >= 30) {
            warningDay.innerHTML = "Must be a valid day";
            day.style.borderColor = "rgb(233, 66, 66)";
            headingDay.style.color = "rgb(233, 66, 66)";
            dayDigit.innerText = "--";
        } else if (Number.isInteger(calcYear) == false && Number(day.value) >= 29) {
            warningDay.innerHTML = "Must be a valid day";
            day.style.borderColor = "rgb(233, 66, 66)";
            headingDay.style.color = "rgb(233, 66, 66)";
            dayDigit.innerText = "--";
        }
    } 
}

// To check possible errors
function checkError () {
    if(Number(dayDigit.innerText) < 0) {
        if(Number(month.value) === 4 || Number(month.value) === 6 || Number(month.value) === 9 || Number(month.value) === 11){ 
            dayDigit.innerText = Number(dayDigit.innerText) + 31;
        } 
        else if (Number(month.value) === 2) {
            if(Number.isInteger(calcYear) == false) {
                dayDigit.innerText = Number(dayDigit.innerText) + 28;
            }
            else {
                dayDigit.innerText = Number(dayDigit.innerText) + 29; 
            }
        }
    }

    if(Number(monthDigit.innerText) < 0){
        monthDigit.innerText = Number(monthDigit.innerText) + 12;
        if(Number(yearDigit.innerText != 0 && Number(year.value) <= current.getFullYear())){
            yearDigit.innerText = Number(yearDigit.innerText) - 1
        }
    }

    
    if(Number(year.value) >= current.getFullYear() && Number(month.value) > current.getMonth() + 1){

        warningMonth.innerHTML = "Must be a valid month";
        month.style.borderColor = "rgb(233, 66, 66)";
        headingMonth.style.color = "rgb(233, 66, 66)";
        monthDigit.innerText = "--";

        day.style.borderColor = "rgb(233, 66, 66)";
        headingDay.style.color = "rgb(233, 66, 66)";
        dayDigit.innerHTML = "--";

    } else if (Number(month.value) == current.getMonth() + 1 && Number(dayDigit.innerText) < 0) {
        warningDay.innerHTML = "Must be a valid day";
        day.style.borderColor = "rgb(233, 66, 66)";
        headingDay.style.color = "rgb(233, 66, 66)";
        dayDigit.innerText = "--";
    } 
}

function operations() {
    validateDay();
    validateMonth ();
    validateYear();
    checkLeapYear();
    checkError(); 
    
    return dayDigit, monthDigit, yearDigit;
}


// Animation
function animate() {
    let digits = document.querySelectorAll('[data-val]');
    let interval = 1300;
    
    digits.forEach((digit) => {
        let startValue = 0;
        let endValue = Number(digit.innerText); 
        let duration = Math.floor(interval / endValue);
        if (endValue > 0){
            let counter = setInterval(() => {
                startValue += 1;
                digit.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter)
                }
            }, duration);
        }
    })
}


// Main Function Upon Submit
btn.addEventListener('click', (e) => {
    operations();
    animate();

    if(Number(dayDigit.innerText) === 0 && Number(monthDigit.innerText) === 0){
        alert("HAPPY BIRTHDAY!!!");
    }
})




console.log("Current Date:")
console.log(current.getDate());
console.log(current.getMonth() + 1);
console.log(current.getFullYear());
