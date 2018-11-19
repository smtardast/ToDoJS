// variables pour spécifier contenu

let favInput = document.querySelector(".yourFavInput");

let allBtn = document.querySelector(".allBtn");

let todoBtn = document.querySelector(".todoBtn");

let doneBtn = document.querySelector(".doneBtn");

let todoElement = document.querySelector(".todoElement");

let dasList = document.querySelector(".dasList");

let addME = document.querySelector(".addMe");

let putmehere = document.querySelector(".putmehere");

// let doneIcon = ;

// let myElement = document.


//define compteur

let cmpt = 0;

//making a variable for input value




//making a function to add elements aka the list elements
function addListElement() {
    let skrivet = favInput.value;
    let newTach = document.createElement("li");
    newTach.classList.add("list-group-item");

    newTach.innerHTML = '<span class="hi" contenteditable="false">' + skrivet + '</span> <i class="float-right fas fa-pen text-info modifyIcon m-1" ></i><i class="float-right fas fa-times text-danger removeIcon m-1"></i><i class="float-right fas fa-check text-success doneIcon m-1"></i>';
    dasList.appendChild(newTach);

    favInput.value = null;

    function tickMe() {

        newTach.classList.add("bg-success", "done");

    }

    function crossMe() {
        newTach.remove();
    }

    function editMe() {
        if (document.querySelector(".hi").contentEditable == "false") {
            document.querySelector(".hi").contentEditable = "true";

        } else {
            document.querySelector(".hi").contentEditable = "false";

        }
    }

    document.querySelector(".doneIcon").addEventListener("click", tickMe);

    document.querySelector(".removeIcon").addEventListener("click", crossMe);

    document.querySelector(".modifyIcon").addEventListener("click", editMe);
}



addME.addEventListener("click", addListElement);