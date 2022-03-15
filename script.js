function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }


function addField() {
    console.log("hej");

    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    // Create an input element for emailID
    var ID = document.createElement("input");
    ID.setAttribute("type", "text");
    ID.setAttribute("name", "emailID");
    ID.setAttribute("placeholder", "E-Mail ID");


    form.append(ID);

    document.getElementsByClassName("formarea")[0]
               .appendChild(form);

    // Append the full name input to the form
    

    document.getElementById("popupForm").style.display = "none";
  }