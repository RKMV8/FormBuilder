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
    ID.setAttribute("id", "tempinput");
    
    var y = document.createElement("label");
    y.innerHTML = document.getElementById('field').value;
    console.log(y.innerHTML);
    y.setAttribute("class", "inputClassLabel");

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

  var multiSelectDiv = document.createElement("div");
  multiSelectDiv.setAttribute("id", "multiSelectDiv");

  var multiSelect = document.createElement("input")
  multiSelect.setAttribute("type", "checkbox");
  multiSelect.setAttribute("name", "test2");

  var multiSelectLabel = document.createElement("label");
  multiSelectLabel.innerHTML = document.getElementById('fieldMulti').value;

  multiSelectDiv.append(multiSelect);
  multiSelectDiv.append(multiSelectLabel);

  document.getElementsByClassName("contentformarea")[0].appendChild(multiSelectDiv);

  document.getElementById('fieldMulti').value = '';
  document.getElementById("popupFormMultiselect").style.display = "none";
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

function openFormMulti() {
  document.getElementById("popupFormMultiselect").style.display = "block";
  document.getElementById("fieldMulti").focus();
}
function closeFormMulti() {
  document.getElementById("popupFormMultiselect").style.display = "none";
}

document.getElementById('field')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('.btn').click();
        }
    });

    document.getElementById('field')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Escape')
        {
          closeForm();
        }
    });

    document.getElementById('fieldMulti')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('.btnMulti').click();
        }
    });

    document.getElementById('fieldMulti')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Escape')
        {
          closeFormMulti()
        }
    });