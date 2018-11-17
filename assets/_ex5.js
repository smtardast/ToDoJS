// let takeMe = document.querySelector(".takeMe");
// console.log("babe");

// function showImg() {
//     let ex5 = document.querySelector(".ex5");
//     let newDiv = document.createElement("div");
//     let currentDiv = document.getElementById("before");
//     document.createElement("div");
//     document.body.insertBefore(newDiv, ex5);
//     console.log("babe");

// }

// takeMe.addEventListener("click", showImg)


let myImg = document.querySelector(".pig");
let space = document.querySelector(".images");
let cmpt = 0;

function more() {
    cmpt++;

    if (cmpt == 1) {
        document.querySelector(".pig").classList.remove("d-none");

    } else {
        let cln = myImg.cloneNode(true);
        space.append(cln);
    }




}

document.querySelector(".takeMe").addEventListener("click", more);