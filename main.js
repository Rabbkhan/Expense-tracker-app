let Name = document.getElementById('Name');
let Ph = document.getElementById('phone');
let description = document.getElementById('description');
let btn = document.querySelector('.btn');

btn.addEventListener('click', e =>{
    e.preventDefault();
let username = Name.value;
let Description = description.value;
let  phone = Ph.value;

const obj ={
    username,
    Description,
    phone
}
localStorage.setItem(obj.Description, JSON.stringify(obj));

showUserScreen(obj);
})
function showUserScreen(obj){

    const parentElem = document.getElementById('listItem');

    let childElem = document.createElement('li');
     childElem.textContent = obj.username + ' - '  + obj.Description ;
     
   parentElem.appendChild(childElem);


   let DeleteButton = document.createElement('input');
   DeleteButton.type = 'button',
   DeleteButton.value = 'Delete'

   DeleteButton.onclick = () =>{
    localStorage.removeItem(obj.Description);
    parentElem.removeChild(childElem);
   }
   let editButton = document.createElement('input');
   editButton.type = 'button',
   editButton.value = 'Edit'

   editButton.onclick = () =>{
    localStorage.removeItem(obj.Description);
    parentElem.removeChild(childElem);

    Name.value = obj.username;
    Ph.value = obj.phone;
    description.value = obj.Description;

   }



    childElem.appendChild(DeleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}

