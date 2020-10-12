var actionItem = document.getElementById("txtAction");
var buttonSubmit = document.getElementById("buttonSubmit");
var list = document.getElementById("listItems");

function createList() {

    var valueAction = actionItem.value;
    var content = document.createTextNode(valueAction);
    var item = document.createElement('li');   
    item.setAttribute('class','list-group-item');
    item.appendChild(content);
    list.appendChild(item); 
}

//Create Event
function divList() {

    buttonSubmit.addEventListener("click", createList());
};

//Comprobar input vacío
 