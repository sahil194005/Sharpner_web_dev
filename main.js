let submit= document.querySelector('.btn')
 
submit.addEventListener('click',onclick)

function onclick(e){
  e.preventDefault()
  let name = document.querySelector('#name').value
  let email = document.querySelector('#email').value
  localStorage.setItem(name,email)
}