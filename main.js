let submit= document.querySelector('.btn')
 
submit.addEventListener('click',onclick)

function onclick(e){
  e.preventDefault()
  let name = document.querySelector('#name').value
  let email = document.querySelector('#email').value
  let myobj = {
    firstName : name,
    PersonalEmail: email
  }
  let myobj_string = JSON.stringify(myobj)
  localStorage.setItem("user1",myobj_string)
  let myobj_json = JSON.parse(myobj_string)
  console.log(myobj_json)
}