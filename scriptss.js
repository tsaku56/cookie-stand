let user = prompt("Hi my name is Ross, what is your name?");

console.log("Hi " + user);

let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

console.log(time)

let message;
// 'if' condidtions are set using the boundary of time '0-23' '<' less than... '<=' less than or equals too the number.
if(time < 12){
    message = "Good Morning " + user + " don't touch my cookies.";
} else if(time <= 18){
    message = "You're up late " + user + " don't touch my cookies.";
} else if(time <= 24){
    message = "Go to bed I suppose " + user + " don't touch my cookies.";
} else {
    message = "Nice try " + user;
}
console.log(message);

// document to find elementid #demo and then demo.innerhtml will show message in h2 which has id of 'demo'
// dots . between each phrase is known as dot notation
const demo = document.getElementById("demo").innerHTML = message;

// confrim
let cheeseFan = confirm("Do you like cheese " + user + " ?");

if(cheeseFan === true){
    console.log("Yum");
}   else {
    console.log("Boo");
}

let result = document.getElementById("myImg");
    let upper = document.getElementById("myImg");
    function changeImage() {
    let image = document.getElementById("myImg");
        if (image.src == "images/cookie-hero.jpg") {
            image.src = "images/cookies.jpg";
            result.innerHTML += "Cookies";
        }
        else {
            image.src = "images/cookies.jpg";
            result.innerHTML += "Cookies";
        }
    upper.innerHTML = "Wheres the cookies";
    }