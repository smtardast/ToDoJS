let un = document.querySelector(".square1");
let deux = document.querySelector(".square2");
let compteur = 0;

document.querySelector(".yourButton").innerText = "Clique moi pour bouger"

function hide() {

    un.classList.toggle("d-none");
    deux.classList.toggle("d-none");
    compteur += 1;
    document.querySelector(".yourCounter").innerText = "t'as cliqué " + compteur + " fois";
}



document.querySelector(".yourButton").addEventListener("click", hide);

