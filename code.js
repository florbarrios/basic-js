// 1. Write a JavaScript program to display the current day and time in the following format.
var todayDate = new Date();
var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var todayDay = weekDays[todayDate.getDay()];
document.getElementById("day").innerHTML = todayDay;

var todayTime = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
document.getElementById("time").innerHTML = todayTime;

var todayFullDate = todayDate.getDate() + "/" + todayDate.getMonth() + "/" + todayDate.getFullYear();
document.getElementById("fulldate").innerHTML = todayFullDate;

/* 8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched". */

function compareNumber() {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    var userNumber = document.getElementById("userNumber").value;
    var result = randomNumber == userNumber ? "Good work!" : "Not matched";
    document.getElementById("outcomeMessage").innerHTML = 'Computer chose: ' + randomNumber +'. ' + result;
}

// 9. Write a JavaScript program to calculate days left until next Christmas.

function daysUntilXmas() {
    var todayDate = new Date().getTime() / 86400000;
    var xmasDate = new Date(2018,11,25).getTime() / 86400000;
    var difference = (xmasDate - todayDate);
    document.getElementById("daysUntilXmas").innerHTML = Math.ceil(difference) + " days until Christmas!";
}

/*15. Write a JavaScript program to get the difference between a given number and 13, 
if the number is greater than 13 return double the absolute difference.*/

function getThirteenDifference() {
    var userNumber = parseInt(document.getElementById("userInput").value);
    var thirteen = 13;
    document.getElementById("outcomeCalculation").innerHTML = userNumber <= thirteen ? thirteen - userNumber : (userNumber - thirteen) * 2;

}

/*16. Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.*/

function calculateSum() {
    var userNumberOne = document.getElementById("userInputOne").value;
    var userNumberTwo = document.getElementById("userInputTwo").value;
    var numberSum = parseInt(userNumberOne) + parseInt(userNumberTwo);
    document.getElementById("totalCalculation").innerHTML = userNumberOne != userNumberTwo ? numberSum : numberSum * 3;
}

//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkNumbers() {
    var firstNumber = document.getElementById("userNoOne").value;
    var secondNumber = document.getElementById("userNoTwo").value;
    var numbersReachFifty =  parseInt(firstNumber) === 50 || parseInt(secondNumber) === 50 || parseInt(firstNumber) + parseInt(secondNumber) === 50;
    document.getElementById("checkResult").innerHTML = numbersReachFifty ? "True" : "False"
}

/*21. Write a JavaScript program to create a new string adding "Central" in front of a given string.
If the given string begins with "Central" then return the original string.*/

function createString() {
    var userString = document.getElementById("userSentiment").value;
    var central = "Central";
    document.getElementById("stringResult").innerHTML = userString.indexOf("Central") === 0 ? userString : central + " " + userString;
}

//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.

function changeString() {
    var userString = document.getElementById("userString").value;
    var firstChar = userString.slice(0, 1);
    var lastChar = userString.slice(userString.length-1,userString.length);
    var result = lastChar + userString.substr((userString.length)-(userString.length-1), userString.length-2) + firstChar;
    document.getElementById("stringOutput").innerHTML = result;
}

//25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

function checkMultiple() {
    var pickNumber = document.getElementById("numberPick").value;
    if (pickNumber % 3 == 0) {
        document.getElementById("isItMultiple").innerHTML = "This number is a multiple of 3";
    } else if (pickNumber % 7 == 0) {
        document.getElementById("isItMultiple").innerHTML = "This number is a multiple of 7";
    } else {
        document.getElementById("isItMultiple").innerHTML = "This number is not a multiple of 3 or 7";
    }
}

// Check all multiples.

function checkAllMultiples(){
    var userPick = document.getElementById("userPick").value;
    var result = [];

    for (var i = 2; i < userPick; i++) {
        if (userPick % i == 0) {
            result.push(i);
       }
    }

    document.getElementById("isMultiple").innerHTML = "Its dividends are: " + result;
}
