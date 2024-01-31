/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    
    return number1 + number2;
}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);

    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function(){

    let subtractNumber1 = Number(document.querySelector("#subtract1").value);

    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = function() {

    let multiplyNumber1 = Number(document.querySelector("#factor1").value);

    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers(){

    let divideNumber1 = Number(document.querySelector("#dividend").value);

    let divideNumber2 = Number(document.querySelector("#divisor").value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Selection Structure */
document.getElementById("getTotal").addEventListener("click", function () {
    let subtotal = Number(document.getElementById("subtotal").value);
  
    if (document.getElementById("member").checked) {
      subtotal = subtotal * 0.8;
    }
  
    document.getElementById("total").textContent = `Total: $${subtotal.toFixed(
      2
    )}`;
  });


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbersArray;
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddsElement = document.getElementById('odds');
oddsElement.innerHTML = oddNumbers;
/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evensElement = document.getElementById('evens');
evensElement.innerHTML = evenNumbers;
/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sumOfArray.toString();
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultiplied.toString();