/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Andrew Jones';
const currentYear = '2024';
const profilePicture = "images/IMG_5513.JPG"



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}`);





/* Step 5 - Array */

let favfoods = ['Pizza', 'Hotdogs', 'Ribeye', 'Any Meat'];
let newfood = 'Burritos';
foodElement.innerHTML += `<br>${favfoods}`
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`
favfoods.splice(0,1);
foodElement.innerHTML += `<br>${favfoods}`
favfoods.pop(0,4)
foodElement.innerHTML += `<br>${favfoods}`







