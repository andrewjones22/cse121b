/* LESSON 3 - Programming Tasks */

/* Profile Object  */


let myProfile = {
    name: "Andrew Jones",
    photo: "images/IMG_5513.JPG",
    favoriteFoods: [
        "Burritos",
        "Pizza",
        "Ice Cream",
        "Hot Dogs"
    ],
    hobbies: [
        "Web Design",
        "Tennis",
        "Going Outdoors"
    ],
    placesLived: []
}




/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        place: "Roseville, CA",length: "24 years",
    },
    {    
        place: "Loveland, CO",length: "1 week",
    },
     
)



/* DOM Manipulation - Output */

/* Name */

document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
const dlPlacesLived = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    
    const dd = document.createElement('dd');
    dd.textContent = place.length;
    
    dlPlacesLived.appendChild(dt);
    dlPlacesLived.appendChild(dd);
});


