let Expense = document.getElementById('expense');
let Description = document.getElementById('description');
let Dropdown = document.getElementById('select');
let Btn = document.querySelector('.btn');

Btn.addEventListener('click', e =>{
    e.preventDefault();
let expense = Expense.value;
let description = Description.value;
let  dropdown = Dropdown.value;
console.log(expense, description, dropdown);

alert(expense);

const obj ={
    Expense,
    Description,
    Dropdown
}

localStorage.setItem(obj.Dropdown, JSON.stringify(obj));

showUserScreen(obj);
})
function showUserScreen(obj){

    const parentElem = document.getElementById('listItem');

    let childElem = document.createElement('li');
     childElem.textContent = obj.Expense + ' - '  + obj.Description ;
     
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

    Expense.value = obj.expense;
    Dropdown .value = obj.phone;
    Description.value = obj.Description;

   }



    childElem.appendChild(DeleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}

