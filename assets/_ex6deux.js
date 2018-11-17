
let inImig = document.querySelector(".inImig");
let result = document.querySelector(".result");

// talen jag ska räkna med

let minaTalInput = [];
let minaTalInputL = minaTalInput.length;
let mathematicalOperations = [];

//räknare för matten
let cmpt = 0;

//räknare för att veta hur många siffror jag lagt in
let rakna = 0;

// totala värdet
let total = 0;

// how many numbers that have been put in, stocked in array so sure doesn't bug
let numberOfNumbers = [];

//
let totalArray = [];


//just to easily find all my buttons etc


let nul = document.querySelector(".nul");
let een = document.querySelector(".een");
let twee = document.querySelector(".twee");
let drie = document.querySelector(".drie");
let vier = document.querySelector(".vier");
let vijf = document.querySelector(".vijf");
let zes = document.querySelector(".zes");
let zeven = document.querySelector(".zeven");
let acht = document.querySelector(".acht");
let negen = document.querySelector(".negen");

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");

let erase = document.querySelector(".erase");
let lika = document.querySelector(".lika");

// store all your numbers

function addToArray() {

    rakna++;
    console.log(inImig.value);
    minaTalInput.push(inImig.value);
    console.log(minaTalInput);
    inImig.value = null;
    numberOfNumbers[0] = rakna;
    console.log("number of numbers is" + numberOfNumbers);
    console.log(numberOfNumbers);

}



// insert number from button

function insertBtnVal0() {
    inImig.value += Number(0);

}

function insertBtnVal1() {
    inImig.value += Number(1);

}

function insertBtnVal2() {
    inImig.value += Number(2);

}

function insertBtnVal3() {
    inImig.value += Number(3);

}

function insertBtnVal4() {
    inImig.value += Number(4);

}

function insertBtnVal5() {
    inImig.value += Number(5);

}

function insertBtnVal6() {
    inImig.value += Number(6);

}

function insertBtnVal7() {
    inImig.value += Number(7);

}

function insertBtnVal8() {
    inImig.value += Number(8);

}

function insertBtnVal9() {
    inImig.value += Number(9);

}

// arithmetic operations being stocked

function addition() {
    //stock operation chosen in case of multiple operations
    mathematicalOperations[cmpt] = "+";
    // increment counter to stock one step further in array
    cmpt++;
    console.log(mathematicalOperations);
}

function subtraction() {
    mathematicalOperations[cmpt] = "-";
    cmpt++;
    console.log(mathematicalOperations);
}

function division() {
    mathematicalOperations[cmpt] = "/";
    cmpt++;
    console.log(mathematicalOperations);
}

function multiplication() {
    mathematicalOperations[cmpt] = "*";
    cmpt++;
    console.log(mathematicalOperations);
}

// C button and after done =. Takes away all numbers stocked and mathematical operations stocked

function nollstall() {
    // do one by one length of longest array
    for (let i = 0; i <= numberOfNumbers[0]; i++) {
        console.log("längd är" + minaTalInput.length)
        minaTalInput.shift();
        mathematicalOperations.shift();
    }
//make sure cmpt is 0 so next time we do a calculation our operation is not stored in ex mathematicalOperations[3] but instead always start in mathematicalOperations[0]
    cmpt = 0;
    console.log(mathematicalOperations);
    console.log(minaTalInput);
}

//take away value of input and of result display. needs to be done only when on C, when clicked on C but also when clicked on = we need to empty array. but claring display is done separately so that there is no issue with the result when press "=". Cause we don't want display to disappear automatlcally, we want to show it(aka the whole point of the calculation is to show it innit)
function eraseInput() {
    inImig.value = null;
    result.innerText = null;
}

//perform the selected mathematical operations on selected numbers
function likamed() {
//the last number also needs to be stocked! we did this after every "+", "-", "/" and "'", also need the last number before addition
    minaTalInput.push(inImig.value);
    console.log(minaTalInput);
    //empty the input
    inImig.value = null;
    //restart cmpt for array of mathematical operators
    cmpt = 0;

    // loop to make calculations for all opeartions
    for (let i = 0; i <= mathematicalOperations.length; i++) {
        
        //even if there is no operation, we want to show that number . Also, if the first number is not stocked differently, problems with ex substraction...
        if (i == 0) {
            //parseInt so stays nr not becoming a string
            total = parseInt(minaTalInput[i]);
            console.log(total);
            //stock value
            totalArray[0] = total;
        } else {
            console.log(mathematicalOperations[i]);
            //when more than one number does calculations

            //depending on string it enters a different if
            if (mathematicalOperations[cmpt] == "+") {
                //add number to previous result
                total = total + parseInt(minaTalInput[i]);
                console.log(total);
                //stock value
                totalArray[0] = total;
                //increment counter to go to next mathematical operator next time
                cmpt++;
                console.log("plus");
            } else if (mathematicalOperations[cmpt] == "-") {
                total = total - parseInt(minaTalInput[i]);
                console.log(total);
                totalArray[0] = total;
                cmpt++;
                console.log("minus");
            } else if (mathematicalOperations[cmpt] == "/") {
                total = total / parseInt(minaTalInput[i]);
                console.log(total);
                totalArray[0] = total;
                cmpt++;
                console.log("divide");
            } else {
                total = total * parseInt(minaTalInput[i]);
                console.log(total);
                totalArray[0] = total;
                cmpt++;
                console.log("multi");
            }
            console.log(mathematicalOperations[i]);
        }
        // after out of if we display the result, aka the variable total that we stockd in our array
        console.log("hej");
        console.log("your thang is total " + total);
        result.innerText = totalArray[0];
    }

    //now that we are out of the loop, and all is done and dusted, we empty the arrays for the next calculation
    nollstall();
    console.log(minaTalInput);
    console.log(mathematicalOperations);
}


//adding event listeners to all the buttons of our HTML

// use function so we store the last number in input when clicked on a operator
plus.addEventListener("click", addToArray);
minus.addEventListener("click", addToArray);
multi.addEventListener("click", addToArray);
divi.addEventListener("click", addToArray);

// also add the operator to the array of chosen operators of calculation, aka mathematicalOperators

plus.addEventListener("click", addition);
minus.addEventListener("click", subtraction);
multi.addEventListener("click", multiplication);
divi.addEventListener("click", division);

// when click on equal we launch the calculation
lika.addEventListener("click", likamed);

//when click on C we BOTH launch the emptying of arrays AND the erasure of what is in input
erase.addEventListener("click", function () {
    nollstall();
    eraseInput();
});

// when click a number in HTML, we launch the function that inserts their value in the input, to later insert in array. but not DIRECTLY becase then can only use single digit numbers. we pass by input so can have multiple digit numbers!
nul.addEventListener("click", insertBtnVal0);
een.addEventListener("click", insertBtnVal1);
twee.addEventListener("click", insertBtnVal2);
drie.addEventListener("click", insertBtnVal3);
vier.addEventListener("click", insertBtnVal4);
vijf.addEventListener("click", insertBtnVal5);
zes.addEventListener("click", insertBtnVal6);
zeven.addEventListener("click", insertBtnVal7);
acht.addEventListener("click", insertBtnVal8);
negen.addEventListener("click", insertBtnVal9);
