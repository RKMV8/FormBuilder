function backgroundColorPicker() {
    var x = document.getElementById("background").value;
    document.getElementsByClassName("formarea")[0].style.backgroundColor = x;
}

function textColorPicker() {
  var x = document.getElementById("formText").value;
  document.querySelectorAll('.inputClassLabel, h1').forEach(element => element.style.color =x);
}

function changeFontStyle(font){
document.querySelectorAll('.inputClassLabel, h1').forEach(element => element.style.fontFamily = font.value);
}

var divCount = 1;
function addField() {

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    var ID = document.createElement("input");
    ID.setAttribute("type", "text");
    ID.setAttribute("name", "emailID");
    ID.setAttribute("id", "tempinput")
    
    var y = document.createElement("label");
    y.innerHTML = document.getElementById('field').value;
    console.log(y.innerHTML);
    y.setAttribute("class", "inputClassLabel")

    form.append(y);
    form.append(ID);

    var div = document.createElement("formdiv");
    div.setAttribute("class", "formDiv");
    div.setAttribute("id", `formDiv${divCount}`);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", "onDragStart(event);");
    div.append(form);
    
    document.getElementsByClassName("contentformarea")[0].appendChild(div);

    document.getElementById('field').value = '';
    document.getElementById("popupForm").style.display = "none";
    divCount++;
  }

function addMultiSelect(){

}



function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(event.target.tagName)

    if (event.target.tagName == 'FORM' || event.target.tagName == 'INPUT' || event.target.tagName == 'LABEL' || event.target.tagName == 'H1' || event.target.tagName == 'FORMDIV') {
      console.log("Not a draggable area")
    }
    else {
      dropzone.appendChild(draggableElement);
        event
        .dataTransfer
        .clearData();
    } 
}


function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("field").focus();
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

document.getElementById('field')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('.btn').click();
        }
    });