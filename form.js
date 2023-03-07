
const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

     if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
     } else {
         const li = document.createElement('li');
         const resulT = `${nameInput.value} : ${emailInput.value}`;
         const capResult = resulT.toUpperCase();
         li.appendChild(document.createTextNode(capResult));

         userList.appendChild(li);
         //to clear fields;
         nameInput.value = '';
         emailInput.value = '';
     }
} 

