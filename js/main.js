
let contacts = [];

let addContact = document.getElementById('add-btn')

addContact.addEventListener('click', function () {
   document.getElementById('fullContact').classList.remove = 'fullContacts'
   document.getElementById('fullContact').style.display = 'block'
})


let save = document.getElementById('add');
 save.addEventListener('click', saveContact);

 let fullName = document.getElementById('fname').value 
 let phoneNumber = document.getElementById('phonenum').value;
 
 function saveContact(e) {
     e.preventDefault()
     let fullName = document.getElementById('fname').value 
     let phoneNumber = document.getElementById('phonenum').value;
     if (fullName === "" && phoneNumber === "") {
        document.getElementById('error').innerText = 'Enter details'
     } else {
      contacts.push({fullName, phoneNumber})  
      document.getElementById('fullContact').style.display = 'none'
       document.getElementById('results').innerText = contacts
       console.log(contacts);
       document.getElementById('error').innerText = ''
    
     }
     
 
   showContact()
}

let myresult =  document.getElementById('results');
function showContact() {
      myresult.innerHTML = ""
   contacts.forEach((contact,index) => {
      myresult.innerHTML += `<li>${contact.fullName} ${contact.phoneNumber}</li>
      <span><button class="btn btn-danger" id="${index}" onClick="deleteContact()">Delete</button></span>`
   })

   
}
showContact()
 
function deleteContact(index) {
   contacts.splice(index, 1)

   showContact()
}
