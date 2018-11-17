// let insertMe = document.querySelectorAll(".insertMe");
// let langd = insertMe.length;
let inImig = document.querySelector(".inImig");
let result = document.querySelector(".result");
let minaTalInput = [];
let minaTalInputL = minaTalInput.length;
let mathematicalOperations = [];
// let sifferVarde = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let cmpt = 0;
let rakna = 0;
let total = 0;
let numberOfNumbers = [];

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

function addition() {
    mathematicalOperations[cmpt] = "+";
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

function nollstall() {
    for (let i = 0; i <= numberOfNumbers[0]; i++) {
        console.log("längd är" + minaTalInput.length)
        minaTalInput.shift();
        mathematicalOperations.shift();


    }

    // minaTalInput.splice(0, minaTalInput.length);
    // mathematicalOperations.splice(0, mathematicalOperations.length);
    // mathematicalOperations[i] = null;
    // minaTalInput[i] = [];
    inImig.value = null;
    result.innerText = null;
    cmpt = 0;
    console.log(mathematicalOperations);
    console.log(minaTalInput);
}

function likamed() {

    minaTalInput.push(inImig.value);
    console.log(minaTalInput);
    inImig.value = null;
    cmpt = 0;

    for (let i = 0; i <= mathematicalOperations.length; i++) {
        if (i == 0) {
            total = parseInt(minaTalInput[i]);
            console.log(total);
        } else {
            console.log(mathematicalOperations[i]);

            if (mathematicalOperations[cmpt] == "+") {
                total = total + parseInt(minaTalInput[i]);
                console.log(total);
                cmpt++;
                console.log("plus");
            } else if (mathematicalOperations[cmpt] == "-") {
                total = total - parseInt(minaTalInput[i]);
                console.log(total);
                cmpt++;
                console.log("minus");
            } else if (mathematicalOperations[cmpt] == "/") {
                total = total / parseInt(minaTalInput[i]);
                console.log(total);
                cmpt++;
                console.log("divide");
            } else {
                total = total * parseInt(minaTalInput[i]);
                console.log(total);
                cmpt++;
                console.log("multi");
            }
            console.log(mathematicalOperations[i]);
        }
        console.log("hej");
        console.log("your thang is total " + total);
        result.innerText = total;

        nollstall();
        console.log(minaTalInput);
        console.log(mathematicalOperations);




    }

}



plus.addEventListener("click", addToArray);
minus.addEventListener("click", addToArray);
multi.addEventListener("click", addToArray);
divi.addEventListener("click", addToArray);

plus.addEventListener("click", addition);
minus.addEventListener("click", subtraction);
multi.addEventListener("click", multiplication);
divi.addEventListener("click", division);

lika.addEventListener("click", likamed);
erase.addEventListener("click", nollstall);

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

// for (let i = 0; i < 10; i++) {
//     insertMe[i].addEventListener("click", addToArray);
// }

// function afficher(param) {
//     inImig.innerText = param;
//     console.log(param);
// }



// een.addEventListener("click", afficher(en));

// let noll = 0;
// let en = 1;
// let tva = 2;
// let tre = 3;
// let fyra = 4;
// let fem = 5;
// let sex = 6;
// let sju = 7;
// let atta = 8;
// let nio = 9;



// nul.addEventListener("click", addToArray(noll));
// een.addEventListener("click", addToArray(en));