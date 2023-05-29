let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let phoneInput = document.querySelector("#phoneNo-input");

let submit = document.querySelector("#submit");
submit.addEventListener("click", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  let name_val = nameInput.value;
  let email_val = emailInput.value;
  let phone_val = phoneInput.value;
  let myobj = {
    name: name_val,
    email: email_val,
    phoneNo: phone_val,
  };

  if (localStorage.getItem("details")) {
    let details = JSON.parse(localStorage.getItem("details"));
    let myArray = details;

    myArray.push(myobj);

    myobj_string = JSON.stringify(myArray);
    localStorage.setItem("details", myobj_string);
  } else {
    let myArray = [];
    myArray.push(myobj);

    myobj_string = JSON.stringify(myArray);
    localStorage.setItem("details", myobj_string);
  }

  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";

  // Display the details in an unordered list
  displayDetails();
}

function displayDetails() {
  let detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = ""; // Clear the container before adding new details

  let details = JSON.parse(localStorage.getItem("details"));

  if (details && details.length > 0) {
    let ul = document.createElement("ul");

    details.forEach((detail, index) => {
      let li = document.createElement("li");
      li.textContent = `Name: ${detail.name}, Email: ${detail.email}, Phone: ${detail.phoneNo}`;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteDetail(index);
      });

      li.appendChild(deleteButton);
      ul.appendChild(li);
    });

    detailsContainer.appendChild(ul);
  }
}

function deleteDetail(index) {
  let details = JSON.parse(localStorage.getItem("details"));

  if (details && details.length > index) {
    details.splice(index, 1);

    let myobj_string = JSON.stringify(details);
    localStorage.setItem("details", myobj_string);

    displayDetails();
  }
}
