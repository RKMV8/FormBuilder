function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }


function addField() {

    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    // Create an input element for emailID
    var ID = document.createElement("input");
    ID.setAttribute("type", "text");
    ID.setAttribute("name", "emailID");
    

    //create label
    var y = document.createElement("label");
    y.innerHTML = document.getElementById('field').value;
    console.log(y.innerHTML);

    form.append(y);
    form.append(ID);

    var div = document.createElement("formdiv");
    div.setAttribute("id", "formDiv");
    div.append(form);

    document.getElementsByClassName("formarea")[0]
               .appendChild(div);

    // Append the full name input to the form
    
    document.getElementById('field').value = " ";
    document.getElementById("popupForm").style.display = "none";
  }

function addMultiSelect(){

}

function validateFormOnSubmit() {
  addField();
}


