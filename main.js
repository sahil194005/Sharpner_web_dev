let nameInput = document.querySelector("#name-input")
let emailInput = document.querySelector("#email-input")
let phoneInput = document.querySelector("#phoneNo-input")
let submitBtn = document.querySelector("#submit")
let data = document.querySelector("#details-container")

submitBtn.addEventListener("click", onsubmit)

function onsubmit(e) {
  e.preventDefault()

  let myobj = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  }

  let existingData = localStorage.getItem("details")
  if (existingData) {
    let MyArr = JSON.parse(existingData)
    MyArr.push(myobj)
    let MyArrString = JSON.stringify(MyArr)
    localStorage.setItem("details", MyArrString)
  } else {
    let MyArr = []
    MyArr.push(myobj)
    localStorage.setItem("details", JSON.stringify(MyArr))
  }
  nameInput.value = ""
  emailInput.value = ""
  phoneInput.value = ""
  creatingList()
}

function creatingList() {
  if (data.firstElementChild) {
    data.firstElementChild.remove()
  }

  let newUL = document.createElement("ul")
  let existingData = JSON.parse(localStorage.getItem("details"))
  for (let i = 0; i < existingData.length; i++) {
    let newli = document.createElement("li")
    let nameSpan = document.createElement("span")
    let emailSpan = document.createElement("span")
    let phoneSpan = document.createElement("span")
    nameSpan.style.display = "none"
    emailSpan.style.display = "none"
    phoneSpan.style.display = "none"
    nameSpan.textContent = existingData[i].name
    emailSpan.textContent = existingData[i].email
    phoneSpan.textContent = existingData[i].phone
    newli.appendChild(nameSpan)
    newli.appendChild(emailSpan)
    newli.appendChild(phoneSpan)
    newli.appendChild(
      document.createTextNode(
        `name: ${existingData[i].name}, email: ${existingData[i].email}, phone: ${existingData[i].phone}`
      )
    )
    let delbtn = document.createElement("button")
    let editbtn = document.createElement("button")
    editbtn.textContent = "edit"
    delbtn.textContent = "delete"
    newli.appendChild(delbtn)
    newli.appendChild(editbtn)
    newUL.appendChild(newli)
    delbtn.addEventListener("click", delitem)
    editbtn.addEventListener("click", edititem)
  }

  data.appendChild(newUL)
}

function edititem(e) {
  e.preventDefault()
  e.preventDefault()
  let listItem = e.target.parentElement
  let nameElement = listItem.querySelector("span name")
  let emailElement = listItem.querySelector("span email")
  let a = listItem.children[0].textContent
  let b = listItem.children[1].textContent
  let c = listItem.children[2].textContent
  console.log(a, b, c)
  nameInput.value = a
  emailInput.value = b
  phoneInput.value = c

  let name = listItem.children[0].textContent
  listItem.remove()

  let existingData = JSON.parse(localStorage.getItem("details"))
  let updatedData = existingData.filter((item) => item.name !== name)
  localStorage.setItem("details", JSON.stringify(updatedData))
}

function delitem(e) {
  e.preventDefault()
  let listItem = e.target.parentElement
  let nameElement = listItem.querySelector("span")
  let name = nameElement.textContent
  listItem.remove()

  let existingData = JSON.parse(localStorage.getItem("details"))
  let updatedData = existingData.filter((item) => item.name !== name)
  localStorage.setItem("details", JSON.stringify(updatedData))
}
