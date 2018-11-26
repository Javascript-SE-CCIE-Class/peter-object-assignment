// answer to question 2
let myPenguin = {
    character: 'Gunter',
    origin: 'Adventer Time',
    author: 'Catoon Network'
};
//answer to question 3
console.log("Hello, I'm a penguin and my name is " + myPenguin.character + ".");
//answer to question 4

myPenguin.fly = function() {
    if (myPenguin.canFly === true) {
        console.log("I surely can fly!");
    } else {
        console.log("I surely cannot fly !");
    }
};
//answer to question 5
myPenguin.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
};
console.log(myPenguin);
//answer to question 6
myPenguin.sayHello = function() {
    console.log("Hello, I'm a penguin and my name is " + this.character + ".");
};
//answer question to question 7
myPenguin.sayHello();
//answer to question 8
myPenguin.character="Penguin McPenguinFace";
myPenguin.sayHello();
//answer to question 9
myPenguin.fly();
// answer to question 10

myPenguin.canFly = true;
//answer to question 11
myPenguin.fly();