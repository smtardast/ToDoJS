// let content = document.querySelectorAll("section");
// let buttons = document.querySelectorAll(".page");

// console.log("Salut");

// let tamig = document.querySelectorAll(".klicka");

// let taille = tamig.length;

// function change(something) {
//     console.log("Salut");



//     for (let i = 0; i < tamig.length; i++) {

//         tamig[i].addEventListener('click', () => {

//         })

//         document.querySelector(something).classList.add("d-none");

//     };

//     document.querySelector(something).classList.remove("d-block");

// }
// document.querySelector(".ett").addEventListener("click", change);

// fonction fléhée, plus vite, existe seulement ds le bloc

console.log("hej");

(() => {
    let nav = document.querySelectorAll(".klicka");
    let paneler = document.querySelectorAll(".alla > section");

    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener("click", () => {
            for (let j = 0; j < nav.length; j++) {
                
                nav[j].classList.remove("red");

                paneler[j].classList.remove("visible");
            }
            paneler[i].classList.add("visible");
            nav[i].classList.add("red");
            


        })
    }
})();