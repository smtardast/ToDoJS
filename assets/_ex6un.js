let firstI = document.querySelector(".firstN");
let secondI = document.querySelector(".secondN");
let equals = document.querySelector(".equals");

function calc() {
    let firstN = Number(firstI.value);
    let secondN = Number(secondI.value);
    console.log(firstN);
    console.log(secondN);

    let answer = firstN + secondN;
    document.querySelector(".answer").innerText = answer;
}

equals.addEventListener("click", calc);