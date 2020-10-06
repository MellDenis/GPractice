function createList() {

    var listAction = [];
    var action = document.getElementById("txtAction");
    listAction.push(action);
    console.log(listAction);
    var divList = document.getElementById("listaAcciones");
    divList.innerHTML = listAction;
}

function createDiv() {
    var buttonSubmit = document.getElementById("submit");
    buttonSubmit.addEventListener("click", createList());
    console.log("Se creo el div");
};