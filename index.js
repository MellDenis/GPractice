//Global Variables
var actionItem = document.getElementById("txtAction");
var buttonSubmit = document.getElementById("buttonSubmit");
var list = document.getElementById("listItems");

//Create a list with actions
function createList() {
    var valueAction = actionItem.value;
    var content = document.createTextNode(valueAction);
    var item = document.createElement('li');
    var numberItem = document.createElement('span');
    var contentspan = document.createTextNode('1');
    var bandera = item.value;
    console.log(bandera);

    if (valueAction != "") {
        item.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
        numberItem.setAttribute('class', 'badge badge-primary badge-pill');
        numberItem.appendChild(contentspan);
        item.appendChild(numberItem);
        item.appendChild(content);
        list.appendChild(item);
        actionItem.value = "";
    } else {
        $('.alert').show();
    }
}

//Create Event
function divList() {
    buttonSubmit.addEventListener("click", createList());
}

//Edit items
function editItems(id) {
    alert('Editeded');
}

//Delete Items
function deleteItems() {
    var childItem = list.children.length;
    console.log(childItem);
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};
