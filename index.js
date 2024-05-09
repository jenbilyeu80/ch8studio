const input = require("readline-sync");

//let str = "LaunchCode";
/*let myBeginningSlice= str.slice(0,3);
console.log(myBeginningSlice);
let myEndingSlice=str.slice(3);
/*let myFinalPigLatin= myEndingSlice + myBeginningSlice;
console.log(myFinalPigLatin)*/

//let myFinalPigLatin = `${myEndingSlice}${myBeginningSlice}`;
//console.log(myFinalPigLatin);*/

/*let userAnswer = input.question("How many letters should switch?");
userAnswer = Number(userAnswer);
let str = "LaunchCode";
let myBeginningSlice= str.slice(0,userAnswer);
let myEndingSlice = str.slice(userAnswer);
let myFinalPigLatin = `${myEndingSlice}${myBeginningSlice}`;
console.log(myFinalPigLatin);*/

/*let str = "LaunchCode";
let userAnswer = input.question("How many letters should switch?");
userAnswer = Number(userAnswer);

let myFinalPigLatin = "";

if(userAnswer >= str.length){
  userAnswer = 3;
  myFinalPigLatin = "String is only " + str.length +" " + "long! What are you doing?!"; 
}
let myBeginningSlice= str.slice(0,userAnswer);
let myEndingSlice = str.slice(userAnswer);
myFinalPigLatin = `${myEndingSlice}${myBeginningSlice} ${myFinalPigLatin}`;
console.log(myFinalPigLatin);*/

let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

if (protoArray1.includes(",")) {
  protoArray1 = protoArray1.split(",").reverse().join(",");
  console.log(protoArray1);
} else if (protoArray1.includes(";")) {
  protoArray1 = protoArray1.split(";").sort().join(",");
  console.log(protoArray1);
} else if (protoArray1.includes(" ")) {
  protoArray1 = protoArray1.split(" ").sort().reverse().join(" ");
  console.log(protoArray1);
}

if (protoArray2.includes(",")) {
  protoArray2 = protoArray2.split(",").reverse().join(",");
  console.log(protoArray2);
} else if (protoArray2.includes(";")) {
  protoArray2 = protoArray2.split(";").sort().join(",");
  console.log(protoArray2);
} else if (protoArray2.includes(" ")) {
  protoArray2 = protoArray2.split(" ").sort().reverse().join(" ");
  console.log(protoArray2);
}

if (protoArray3.includes(",")) {
  protoArray3 = protoArray3.split(",").reverse().join(",");
  console.log(protoArray3);
} else if (protoArray3.includes(";")) {
  protoArray3 = protoArray3.split(";").sort().join(",");
  console.log(protoArray3);
} else if (protoArray3.includes(" ")) {
  protoArray3 = protoArray3.split(" ").sort().reverse().join(" ");
  console.log(protoArray3);
}

if (protoArray4.includes(",")) {
  protoArray4 = protoArray4.split(",").reverse().join(",");
  console.log(protoArray4);
} else if (protoArray4.includes(";")) {
  protoArray4 = protoArray4.split(";").sort().join(",");
  console.log(protoArray4);
} else if (protoArray4.includes(" ")) {
  protoArray4 = protoArray4.split(" ").sort().reverse().join(" ");
  console.log(protoArray4);
}

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log(cargoHold);

let userCabinetSelection = input.question(
  "Which cabinet would you like? (0-3) ",
);
userCabinetSelection = Number(userCabinetSelection);
console.log(userCabinetSelection);
if (userCabinetSelection < cargoHold.length) {
  console.log(cargoHold[userCabinetSelection]);
} else {
  console.log("ERROR: What are you doing");
}

const userItemSelection = input.question("Which item would you like?");
if (cargoHold[userCabinetSelection].includes(userItemSelection)) {
  console.log(
    `Cabinet ${userCabinetSelection} DOES contain ${userItemSelection}.`,
  );
} else {
  console.log(
    `Cabinet ${userCabinetSelection} DOES NOT contain ${userItemSelection}.`,
  );
}
