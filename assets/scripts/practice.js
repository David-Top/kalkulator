console.log("Selamat Anda berhasil menggunakan JavaScript pada website");
//alert("Terima kasih");

/*
var firstName = "Harry";
console.log(firstName);

firstName = "Ron";
console.log(firstName);
*/

//contoh hoisting pada atribut var
/*
var x;
x = 100;
console.log(x);
*/

// =====================TIPE DATA=============================
/*
let x,y,z;
y = 15;
z = 17.5;

console.log(x, "is", typeof(x));
console.log(y, "is", typeof(y));
console.log(z, "is", typeof(z));

//operasi aritmatika
let a = 12,
    b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//increement & decreement
let prefix = 5, 
    postfixInc = 5, 
    postfixDec = 5;

console.log(prefix++);
console.log(++postfixInc);
console.log(--postfixDec);

//string
let greet = "Hello";
let moreGreet = greet + greet;

console.log(greet, "is", typeof(greet));
console.log(moreGreet);

//boolean
let x = true,
    y = false;

console.log(x, "is", typeof(x));
console.log(y, "is", typeof(y));

const a = 1;
const b = 2;
let isGreater = a < b;
let isLess = a > b;

console.log(isGreater);
console.log(isLess);

//null
let someLaterData = null;
console.log(someLaterData);
*/

//======================ARRAY & OBJECT============================//
/*
//array
let myArray = ["Array",42.5,true,15,"Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah", myArray.length);

//object name, age, ismuggle, friends
let user = {
    //normal object
    //firstName: "Hary",
    //lastName: "Potter",
    //nesting object in object
    name: {
        first: "Hary",
        last: "Potter"
    },
    age: 20,
    isMuggle: false,
    friends: ["Ron", "Hermoine", "Hagrit"]
};

console.log("Hello, my name is " + user.name.first + " " + user.name.last);
console.log("I'm " + user.age + " years old");
console.log("and these are my friend " + user.friends[0] + ", " + user.friends[1] + ", and " + user.friends[2]);
*/

//=================================IF/ELSE STATEMENT==========================//
/*
//if else
let x = 50;
if (x > 70) {
    console.log(x + " lebih dari 70");
} else {
    console.log(x + " kurang dari 70");
}

//if else where if has more than one statement
let language = "Japan";
let greeting = "Selamat Pagi";

if (language === "English") {
    greeting = "Good Morning";
}else if (language === "Spain") {
    greeting - "Buenos Dias";
}else if (language === "Japan") {
    greeting = "Ohayougozaimasu";
}

console.log(greeting);
*/

//=============================== LOOP ==============================//
/* 

let favoriteFruits = ["Red Grapes", "Apple", "Pear", "Orange", "Strawberry"];

//for loop
for (let index = 0; index < favoriteFruits.length; index++) {
    console.log(favoriteFruits[index]);
}

//for of loop
for (const i of favoriteFruits) {
    console.log(i);
}
*/

/* 
=========================================== FUNCTION ====================================================


function greeting(name, language) {
    if (language === "English") {
        console.log("Good Morning " + name);
    } else if (language === "France") {
        console.log("Bonjour " + name);
    } else {
        console.log("Selamat Pagi " + name)
    }
}

greeting("David", "Indonesia");

//function with return
function multiply(a, b) {
    return a*b;
}

let result = multiply(10, 10);
console.log(result);

//function with return string type data
function greeting(name, language) {
    if (language === "English") {
        return "Good Morning " + name;
    } else if (language === "France") {
        return "Bonjour " + name;        
    } else {
        return "Selamat Pagi " + name;
    }
}

let greetingMessage = greeting("Vasco", "France");
console.log(greetingMessage);
*/

/*
============================================ WINDOW BROWSER ============================================= 

const firstName = prompt("Siapa nama depan Anda?");
const lastName = prompt("Siapa nama belakang Anda?");
const language = prompt("Anda dapat berbahasa apa?");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language
}

if (user.language === "English") {
    alert ("Nice to meet you " + user.name.first + " " + user.name.last);
} else if (user.language === "Japan") {
    alert ("Hajimemasute " + user.name.first + " " + user.name.last);
} else if (user.language === "Spain") {
    alert ("Encanta de conocerte " + user.name.first + " " + user.name.last);
} else {
    alert ("Senang berkenalan dengan Anda " + user.name.first + " " + user.name.last);
}

*/