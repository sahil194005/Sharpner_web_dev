// let hd = document.querySelector('head')

// let heading = document.createElement('h1')
// heading.appendChild(document.createTextNode('Title'))
// hd.appendChild(heading)

// let form = document.querySelector('.form-inline.mb-3')
// // console.log(form)
// let newfield = document.createElement('input')
// newfield.type = "text"
// newfield.name = "Name"
// newfield.classList = "form-control mr-2"

// form.appendChild
// (newfield)
// *******************************************************************************
// let title = (document.getElementById('header-title'))
// console.log(title)
// title.innerHTML = '<h2>puts inside h1 </h2>'
// let heading  = document.querySelector('.title')
// heading.style.color = 'green'
// heading.style.fontWeight = 'bold'

// let title = document.querySelector('.container')
// title.style.border = '10px solid black'
// let item = document.querySelector('#items')
// item.children[2].style.backgroundColor = 'green'
// item.style.fontWeight = 'bold'
let li = document.createElement('li')
let ul = document.querySelector('#items')
li.textContent = 'item5'
li.classList = 'list-group-item'
ul.appendChild(li)