// variables pour spécifier contenu

let favInput = document.querySelector(".yourFavInput");

let allBtn = document.querySelector(".allBtn");

let todoBtn = document.querySelector(".todoBtn");

let doneBtn = document.querySelector(".doneBtn");

let todoElement = document.querySelector(".todoElement");

let dasList = document.querySelector("#dasList");

let addME = document.querySelector(".addMe");

let putmehere = document.querySelector(".putmehere");

let newList = [];





//define compteur

let cmpt = 0;

let count = 0;

//making a variable for input value




//making a function to add elements aka the list elements
function addListElement(event) {

    if (favInput.value == "") {

        alert("write summin bih");

    } else {



        // create li with a span and icons, and with the value og your input in it


        let newTach = document.createElement("li");
        let skrivet = favInput.value;
        newTach.classList.add("list-group-item", "inDaList");

        newTach.innerHTML = '<span class="hi" contenteditable="false">' + skrivet + '</span> <i class="float-right fas fa-pen text-info modifyIcon m-1" ></i><i class="float-right fas fa-times text-danger removeIcon m-1"></i><i class="float-right fas fa-check text-success doneIcon m-1"></i>';
        dasList.appendChild(newTach);

        let btndone = document.querySelectorAll(".doneIcon");
        let btnsupp = document.querySelectorAll(".removeIcon");
        let btnmod = document.querySelectorAll(".modifyIcon");
        //nollställ input
        favInput.value = null;

        //put all created li in a list
        newList = document.querySelectorAll(".inDaList");
        console.log(newList);




        btndone.forEach(element => {
            element.addEventListener("click", validateMe)
            console.log(element);
        });


        btnsupp.forEach(element => {
            element.addEventListener("click", crossMe)
        });

        btnmod.forEach(qq => {
            qq.addEventListener("click", modifyMe)
        })
    }
}


// make button after input able to create li

addME.addEventListener("click", addListElement);

favInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addListElement;
    }
});

//filters 


function filterDone() {
    for (let i = 0; i < newList.length; i++) {

        console.log("filter");
        if (newList[i].classList.contains("done")) {

            newList[i].classList.remove("d-none");

        } else {
            newList[i].classList.add("d-none");
        }
    }
}

function filterAll() {
    for (let i = 0; i < newList.length; i++) {

        newList[i].classList.remove("d-none");
    }

}

function filterTodo() {
    for (let i = 0; i < newList.length; i++) {

        console.log("filter");
        if (newList[i].classList.contains("done")) {

            newList[i].classList.add("d-none");

        } else {
            newList[i].classList.remove("d-none");
        }
    }
}

//icons doing things

function validateMe(event) {
    event.target.parentElement.classList.toggle("bg-success")
}

function crossMe(event) {
    dasList.removeChild(event.target.parentElement);
}

function modifyMe(event) {
    if (event.target.parentElement.firstChild.contentEditable == "true") {


        event.target.parentElement.firstChild.contentEditable = "false";


        console.log("stop editing");

    } else {

        event.target.parentElement.firstChild.contentEditable = "true";


        console.log("editing");


    }

}


allBtn.addEventListener("click", filterAll);
doneBtn.addEventListener("click", filterDone);
todoBtn.addEventListener("click", filterTodo);