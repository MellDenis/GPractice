//Global Variables
var actionItem = document.getElementById("txtAction");
var buttonSubmit = document.getElementById("buttonSubmit");
var buttonDeleteAll = document.getElementById('buttonDeleteAll');
var list = document.getElementById("listItems");
var listActives = document.getElementById(listActives);


//Create an action element
function createNewElement(text) {

    //Create an 'li'
    var item = document.createElement('li');
    //Value set by the user in the input
    item.innerText = text;
    //var content = document.createTextNode(valueAction);
    //var itemsLi = list.getElementsByTagName('li');

    //Create container for input and buttons
    let divContainer = document.createElement('div');
    //Set atributes
    divContainer.classList.add('input-group');
    let divInside = document.createElement('div');
    divInside.classList.add('input-group-append');

    //Create an input 
    let inputActionList = document.createElement('input');
    //Set attribute
    inputActionList.setAttribute('type', 'text');
    inputActionList.classList.add('form-control');

    //Create the 3 buttons
    let buttonActive = document.createElement('button');
    buttonActive.className = 'btn btn-outline-success';
    buttonActive.innerText = 'ACTIVE';

    //Add eventListener for active
    buttonActive.addEventListener('click', sendToActiveList);


    let buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-outline-warning';
    buttonEdit.innerText = 'EDIT';

    //Add eventListener for edit
    //buttonEdit.addEventListener('click', editInfoInput);

    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-outline-danger';
    buttonDelete.innerText = 'DELETE';

    //Add eventListener for delete
    buttonDelete.addEventListener('click',deleteItem);

    //Append the buttons and input to the div
    divInside.appendChild(inputActionList);
    divInside.appendChild(buttonActive);
    divInside.appendChild(buttonEdit);
    divInside.appendChild(buttonDelete);

    //Append the Divs
    divContainer.appendChild(divInside);

    //Append the div to the li
    item.appendChild(divContainer);

    //Append the 'li' to the 'ul'
    //list.insertBefore(item,list.childNodes[0]);
    list.appendChild(item);
}

//Adding to the list the action
function addItemToList() {
    var valueAction = actionItem.value;

    if (valueAction != "") {
        createNewElement(valueAction);
        actionItem.value = "";
    } else {
        $('.alert').show();
    }
}

//Create Add Event
function divList() {
    buttonSubmit.addEventListener("click", addItemToList());
}

//Send to Active List
function sendToActiveList() {
    //'li' child
    let itemChild = this.parentNode.parentNode.parentNode;
    //'ul' parent
    let parent = itemChild.parentNode;
    //'id' parent
    let id = parent.id;
    console.log(itemChild);
    console.log("IdPadre: " + id);
    //Check if the item should go in the 'listActives' or re-added to 'listItems'
    let indice = (id === "listItems") ? document.getElementById("listActives") : document.getElementById("listItems");
    //Remove the 'li' item
    parent.removeChild(itemChild);
    //Add to the new 'ul'
    indice.insertBefore(itemChild,indice.childNodes[0])

}

//Remove item by one
function deleteItem() {
    //Searching the childItem
    let itemChild = this.parentNode.parentNode.parentNode;
    //Searching the parentItem
    let parent = itemChild.parentNode;
    //Removing the Item from the list
    parent.removeChild(itemChild);
}

//Delete all items
function deleteItems() {
    var childItem = list.children.length;
    console.log(childItem);
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};

//Create Delete Event
function deleteAll() {
    buttonDeleteAll.addEventListener('click',deleteItems());
}