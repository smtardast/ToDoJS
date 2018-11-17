let name = document.querySelector(".nom");
let inp = document.querySelector(".in");
let butt = document.querySelector(".butt");

function putMe() {
    var inputName = inp.value;
    name.innerText = inputName;

}

butt.addEventListener("click", putMe);