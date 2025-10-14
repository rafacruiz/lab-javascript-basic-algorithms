// Iteration 1: Names and Input
function inputNames (hacker1, hacker2) {
    
    if (hacker1 === undefined || !hacker1.length) {
        alert("Please input driver´s name");
        return;
    }

    if (hacker2 === undefined || !hacker2.length) {
        alert("Please input navigator´s name");
        return;
    }

    const quotes1 = "The driver's name is" ;
    const quotes2 = "The navigator's name is";

    console.info(quotes1, hacker1);
    console.info(quotes2, hacker2);

    longestNames(hacker1, hacker2);
    charactersCapitals(hacker1);
    charactersCapitals(hacker2);
    charactersReverse(hacker1);
    charactersReverse(hacker2);
    lexicoGraphic (hacker1, hacker2);
}

// Iteration 2: Conditionals
function longestNames (hacker1, hacker2) {
           
    if (hacker1.length > hacker2.length) {
        console.info(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }

    if (hacker1.length < hacker2.length) {
        console.info(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }

    if (hacker1.length === hacker2.length) {
        console.info(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }       
}

// Iteration 3: Loops
function charactersCapitals (hackerName) {
    let newLetter = '';

    for (let i = 0; i < hackerName.length; i++) {
        const hacker = hackerName[i];
        newLetter += hacker;
        newLetter += " ";
    }

    console.info(newLetter.toUpperCase());
}

function charactersReverse (hackerName) {
    let newLetter = '';

    for (let i = hackerName.length - 1; i >= 0; i--) {
        const hacker = hackerName[i];
        
        newLetter += hacker;
    }

    console.log(newLetter);
}

function lexicoGraphic (hacker1, hacker2) {

    if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?");
        return;
    }

    for (let i = 0; i < hacker1.length; i++) {
        const driver = hacker1[i];
        const navegator = hacker2[i];
        
        if (driver < navegator) {
            console.log("The driver's name goes first");
            return;
        } else {
            console.log("Yo, the navigator goes first, definitely.");
            return;
        }
    }
}

const hacker1 = prompt("Enter the driver's name");
const hacker2 = prompt("Enter the navegator`s name");

inputNames(hacker1, hacker2);