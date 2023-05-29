let form = document.querySelector("#addForm")
let itemlist = document.querySelector("#items")

form.addEventListener("submit", onsubmit)
itemlist.addEventListener('click',removeitem)


function removeitem(e){
    e.preventDefault()
   if(e.target.classList.contains('delete'))
   {
    if(confirm('Are You Sure')){
        var li = e.target.parentElement
        itemlist.removeChild(li) 
    }
   } 
}


function onsubmit(e) {
  e.preventDefault()
  let inputval = document.querySelector("#item").value

  let newli = document.createElement("li")
  newli.classList = "list-group-item"
  let newtext = document.createTextNode(inputval)
  newli.appendChild(newtext)

  let newbtn = document.createElement("button")
  newbtn.classList = "btn btn-danger btn-sm float-right delete"
  newbtn.appendChild(document.createTextNode("x"))
  newli.appendChild(newbtn)
  itemlist.appendChild(newli)
}



let item = document.querySelectorAll('.list-group-item')






//adding the edit button
var listItems = document.querySelectorAll('#items li');

listItems.forEach(function(item) {
  var editButton = document.createElement('button');
  editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'float-right');
  editButton.textContent = 'Edit';

  var deleteButton = item.querySelector('.delete');

  
  deleteButton.insertAdjacentElement('afterend', editButton);
});


