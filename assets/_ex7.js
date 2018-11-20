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



// let doneIcon = ;

// let myElement = document.


//define compteur

let cmpt = 0;

let count = 0;

//making a variable for input value




//making a function to add elements aka the list elements
function addListElement() {


    // create li with a span and icons, and with the value og your input in it

    let skrivet = favInput.value;
    let newTach = document.createElement("li");
    newTach.classList.add("list-group-item", "inDaList");

    newTach.innerHTML = '<span class="hi" contenteditable="false">' + skrivet + '</span> <i class="float-right fas fa-pen text-info modifyIcon m-1" ></i><i class="float-right fas fa-times text-danger removeIcon m-1"></i><i class="float-right fas fa-check text-success doneIcon m-1"></i>';
    dasList.appendChild(newTach);

    //nollställ input
    favInput.value = null;

    //put all created li in a list
    newList = document.querySelectorAll(".inDaList");
    console.log(newList);

    // for (let i = 0; i < newList.length; i++) {

    //     console.log("babe");

    //     newList[i].querySelector(".removeIcon").addEventListener("click", () => {
    //         dasList.removeChild(nth-child(i))
    //     })

    // }

    //add possibility of done for every li element

    for (let i = 0; i < newList.length; i++) {

        console.log("babe");
        if (newList[i].classList == "done") {
            newList[i].querySelector(".doneIcon").addEventListener("click", () => {
                newList[i].classList.remove("done", "bg-success");
            })
            console.log("remove me");
        } else {
            newList[i].querySelector(".doneIcon").addEventListener("click", () => {
                newList[i].classList.add("done", "bg-success");
            })
            console.log("add me");
        }



    }

    function crossMe() {
        // make variable for icon. event.target to take just this one. then get parent thru icon!
        //newTach.parentNode.removeChild(newTach);


        dasList.removeChild(event.target.parentElement);
    }

    function editMe() {
        // for (let i = 0; i < newList.length; i++) {
        if (document.querySelector(".hi").contentEditable == "false") {
            document.querySelector(".hi").contentEditable = "true";

        } else {
            document.querySelector(".hi").contentEditable = "false";

        }
        // }
    }

    // document.querySelector(".doneIcon").addEventListener("click", tickMe);

    let btnsupp = document.querySelectorAll(".removeIcon");

    btnsupp.forEach(element => {
        element.addEventListener("click", crossMe)
    });

    document.querySelectorAll(".modifyIcon").addEventListener("click", editMe);




}

// make button after input able to create li

addME.addEventListener("click", addListElement);

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

allBtn.addEventListener("click", filterAll);
doneBtn.addEventListener("click", filterDone);
todoBtn.addEventListener("click", filterTodo);